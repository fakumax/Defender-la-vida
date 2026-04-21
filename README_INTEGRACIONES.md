# Integración del formulario de contacto con Web3Forms

El formulario en `/contacto` está preparado con la estructura correcta. Para activar el envío de correos, seguí estos pasos (lleva 5 minutos):

## 1. Obtener la Access Key

1. Entrá a https://web3forms.com
2. Pegá el correo `defenderlavida@gmail.com` en el campo "Email"
3. Hacé clic en **Create Access Key**
4. Te va a llegar un correo con la **access key** (un string largo tipo `a1b2c3d4-e5f6-...`)

> No hay que crear cuenta ni usuario. Solo guardá esa key.

## 2. Pegar la key en el proyecto

En el archivo `.env` del proyecto (creá el archivo si no existe, al lado de `package.json`):

```env
WEB3FORMS_ACCESS_KEY=pega_aqui_la_key
```

## 3. Actualizar el formulario

Editar `frontend/src/pages/contacto.astro` y cambiar el bloque del `<ContactUs>` por un `<form>` normal apuntando a Web3Forms. Te dejo acá la versión lista:

```astro
<form action="https://api.web3forms.com/submit" method="POST" class="...">
  <input type="hidden" name="access_key" value={import.meta.env.WEB3FORMS_ACCESS_KEY} />
  <input type="hidden" name="subject" value="Nuevo mensaje desde la web - Defender la Vida" />
  <input type="hidden" name="from_name" value="Web Defender la Vida" />

  <!-- Honeypot anti-spam (invisible para humanos) -->
  <input type="checkbox" name="botcheck" class="hidden" style="display:none" />

  <input type="text" name="name" placeholder="Nombre y apellido" required />
  <input type="email" name="email" placeholder="Correo electrónico" required />
  <input type="tel" name="phone" placeholder="Teléfono (opcional)" />
  <input type="text" name="subject" placeholder="Asunto" required />
  <textarea name="message" placeholder="Tu mensaje" required rows="5"></textarea>

  <button type="submit">Enviar mensaje</button>
</form>
```

Cuando lo necesites avisá y lo integro contra el `Contact.astro` existente manteniendo el estilo visual.

## Límites del plan gratuito

- **250 envíos/mes** — suficiente para la asociación
- Tamaño máx. por mensaje: 1 MB
- Sin publicidad ni branding en el correo
- Sin captcha obligatorio (el honeypot ya filtra la mayoría de bots)

## Anti-spam

Si en algún momento empieza a llegar spam:

1. En el dashboard de Web3Forms (accedés con tu access key, sin cuenta) activás **hCaptcha**.
2. Agregamos el widget `<div class="h-captcha" data-captcha="true"></div>` y el script.

---

## Alternativas (por si Web3Forms no funciona)

- **FormSubmit** (https://formsubmit.co) — pegás `action="https://formsubmit.co/defenderlavida@gmail.com"`, confirmás el correo una vez y listo.
- **Resend** — para cuando queramos plantillas HTML y newsletter, requiere migrar Astro a modo SSR.
