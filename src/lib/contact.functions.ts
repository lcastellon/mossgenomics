import { createServerFn, getRequest } from "@tanstack/react-start";
import { createHash } from "crypto";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio").max(100),
  institution: z.string().trim().max(100).optional().default(""),
  email: z.string().trim().email("Correo inválido").max(255),
  reason: z.string().trim().min(1, "Selecciona un motivo").max(50),
  message: z.string().trim().min(1, "El mensaje es obligatorio").max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const request = getRequest();
    const forwarded = request?.headers.get("x-forwarded-for");
    const ip = (typeof forwarded === "string" ? forwarded.split(",")[0]?.trim() : null) ?? "unknown";
    const userAgent = request?.headers.get("user-agent") ?? "";
    const ipHash = createHash("sha256").update(ip).digest("hex");

    const windowStart = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { count, error: countError } = await supabaseAdmin
      .from("contact_submissions")
      .select("*", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", windowStart);

    if (countError) {
      console.error("Rate-limit check failed:", countError);
      throw new Error("No se pudo verificar el límite de envíos");
    }

    if ((count ?? 0) >= 3) {
      return {
        ok: false,
        error: "Has enviado demasiados mensajes. Por favor espera unos minutos.",
      };
    }

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      institution: data.institution || null,
      email: data.email,
      reason: data.reason,
      message: data.message,
      ip_hash: ipHash,
      user_agent: userAgent,
    });

    if (error) {
      console.error("Contact insert failed:", error);
      throw new Error("No se pudo guardar el mensaje");
    }

    return { ok: true };
  });
