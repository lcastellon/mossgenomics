# Plan: Guardar mensajes del formulario de contacto en base de datos

## Objetivo
Hacer que el formulario de `/contact` guarde cada envío en una tabla de Lovable Cloud, mostrando confirmación real al usuario en lugar del mensaje de "no conectado".

## Pasos

1. **Habilitar Lovable Cloud**
   - Activar la integración Cloud para crear el proyecto de base de datos vinculado.
   - Esto genera `src/integrations/supabase/client.ts` y las variables de entorno necesarias.

2. **Crear tabla `contact_submissions`**
   - Columnas: `id` (uuid, PK), `name`, `institution` (opcional), `email`, `reason`, `message`, `created_at`, `ip_hash` (hash de IP para mitigación básica de spam), `user_agent`.
   - Añadir `GRANT` a `anon` (solo INSERT) y `authenticated`/`service_role` según corresponda.
   - Habilitar RLS.
   - Política `anon` para INSERT sin autenticación.

3. **Crear función de servidor pública**
   - `src/lib/contact.functions.ts` con `createServerFn({ method: "POST" })`.
   - Validar campos con Zod.
   - Insertar fila usando cliente publicable de Supabase (sin requerir sesión).
   - Limitar envíos repetidos por IP (por ejemplo, máximo 3 envíos en 10 minutos) consultando `ip_hash`.
   - Devolver `{ ok: true }` o error controlado.

4. **Actualizar la página `/contact`**
   - Reemplazar `onSubmit` simulado por llamada a la server function con `useServerFn`.
   - Estados: `idle`, `submitting`, `success`, `error`.
   - Mostrar mensaje de confirmación real tras envío exitoso.
   - Actualizar texto informativo inferior para reflejar que los mensajes se guardan.

5. **Verificar y probar**
   - Ejecutar typecheck y probar ruta `/contact` con Playwright.
   - Confirmar que una fila aparece en Cloud → Database → `contact_submissions`.

## Alcance fuera de este plan
- No se enviarán correos electrónicos automáticos (eso requiere dominio de correo configurado).
- No se creará un panel de administración para leer mensajes; eso puede hacerse directamente desde Cloud → Database o en un paso posterior si se requiere.

## Técnica
- TanStack Start `createServerFn` + Supabase public client para escritura anónima controlada.
- RLS con policy de INSERT para `anon` y rate limiting por hash de IP.
