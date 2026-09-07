# Montaña Solei

Sitio web corporativo y de promoción para una experiencia de alojamiento y celebración en un entorno natural. La aplicación está construida con React, TypeScript y Vite, y está preparada para desplegarse en Netlify con funciones serverless para el envío de formularios de contacto.

## 1. Descripción general

Montaña Solei es una landing page y sitio institucional con varias secciones temáticas:

- Inicio con hero visual, presentación del espacio y propuestas de experiencia
- Sección histórica y de marca
- Sección de testimonios
- Sección de contacto con formulario
- Traducciones en español e inglés
- Navegación con rutas y layout común
- Botón de WhatsApp para contacto rápido

El objetivo principal es presentar la propiedad/experiencia, captar leads por correo y ofrecer un sitio atractivo, moderno y adaptable a dispositivos móviles.

## 2. Stack tecnológico

- React 19
- TypeScript
- Vite
- React Router DOM
- i18next + react-i18next
- Tailwind CSS
- Framer Motion
- Netlify Functions
- Resend para envío de correos
- ESLint + Prettier

## 3. Requisitos previos

Antes de ejecutar el proyecto necesitas tener instalado:

- Node.js 18+
- npm o pnpm
- Git

Se recomienda usar pnpm porque el proyecto incluye lockfile de pnpm y configuración de workspace.

## 4. Instalación

```bash
npm install
# o
pnpm install
```

## 5. Ejecución local

```bash
npm run dev
# o
pnpm dev
```

La aplicación quedará disponible normalmente en:

- http://localhost:5173

## 6. Scripts disponibles

En el archivo package.json hay los siguientes comandos:

```bash
npm run dev      # inicia Vite para desarrollo
npm run build    # compila TypeScript + genera build de producción
npm run lint     # valida el proyecto con ESLint
npm run preview  # sirve la build localmente para revisión
```

## 7. Estructura del proyecto

```text
mont-solei/
├── public/
│   └── images/
├── netlify/
│   └── functions/
│       └── send-email.js
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Contact/
│   │   ├── History/
│   │   ├── Home/
│   │   ├── shadcn/
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   ├── LangSwitcher.tsx
│   │   ├── Navbar.tsx
│   │   ├── NavbarNoHero.tsx
│   │   ├── SunLink.tsx
│   │   ├── Title.tsx
│   │   └── WhatsAppButton.tsx
│   ├── context/
│   │   └── NavbarThemeContext.tsx
│   ├── hooks/
│   │   └── useInView.ts
│   ├── i18n/
│   │   └── config.ts
│   ├── layouts/
│   │   └── Layout.tsx
│   ├── locales/
│   │   ├── en/
│   │   └── es/
│   ├── pages/
│   │   ├── Contact/
│   │   ├── History/
│   │   └── Home/
│   ├── routes/
│   │   └── routes.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── components.json
├── eslint.config.js
├── index.html
├── netlify.toml
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig*.json
├── vite.config.ts
└── README.md
```

## 8. Rutas principales

La aplicación usa React Router con un layout común:

- `/` → Home
- `/history` → Historia
- `/contact` → Contacto

La configuración se encuentra en:

- src/routes/routes.tsx

## 9. Internacionalización

El idioma está gestionado con `i18next` y la configuración inicial se encuentra en:

- src/i18n/config.ts

Se incluyen recursos en:

- src/locales/es/translation.json
- src/locales/en/translation.json

El selector de idioma se gestiona desde:

- src/components/LangSwitcher.tsx

## 10. Componentes clave

### Layout

- src/layouts/Layout.tsx
- Define el header fijo con `Navbar`, el contenido principal con `Outlet` y el footer.

### Navbar

- src/components/Navbar.tsx
- Incluye enlaces de navegación y switch de idioma.

### Home

- src/pages/Home/Index.tsx
- Compone la landing principal con varias secciones: hero, intro, misión, testimonios y CTA.

### Contacto

- src/pages/Contact/Index.tsx
- Integra información de contacto con el formulario de solicitud.

### Formulario de contacto

- src/components/Contact/FormSection.tsx
- Envía datos a la función serverless de Netlify mediante fetch a `/.netlify/functions/send-email`.

## 11. Flujo de envío de correo

El formulario recoge:

- nombre
- email
- tipo de evento
- mensaje

Luego realiza una petición POST a la función Netlify:

- netlify/functions/send-email.js

La función:

1. valida el método HTTP (solo `POST`)
2. parsea el body JSON
3. valida campos obligatorios
4. usa Resend para enviar el email
5. responde con éxito o error en formato JSON

### Ejemplo de payload

```json
{
    "to": "tu-email-de-destino@ejemplo.com",
    "subject": "Nueva consulta de Nombre — Boda",
    "message": "Nombre: ...\nEmail: ...\nTipo de evento: ...\nMensaje: ..."
}
```

## 12. Variables de entorno

Para el envío real de correos, la función necesita la clave de Resend:

```bash
RESEND_API_KEY=tu_clave_de_resend
```

En Netlify se debería configurar como variable de entorno del sitio.

> Importante: en el código actual, el formulario tiene un destino de ejemplo en la propiedad `to` y debe ajustarse al correo real que recibirá los mensajes.

## 13. Configuración de despliegue

La configuración del despliegue de Netlify está en:

- netlify.toml

Contenido relevante:

```toml
[build]
  functions = "netlify/functions"
```

Esto indica que Netlify debe publicar la carpeta de funciones serverless para la API de envío de emails.

## 14. Personalización visual

La estética del sitio usa una paleta de colores y tipografías propias. Los estilos generales y efectos de la interfaz se encuentran en:

- src/App.css
- src/index.css
- src/components/\*

También se usa un theme context para ajustar el color del navbar según la sección visible:

- src/context/NavbarThemeContext.tsx

## 15. Buenas prácticas recomendadas

- Configurar el dominio y remitente real en Resend para producción
- Sustituir correo destino placeholder por el correo real del negocio
- Revisar `to` y `from` en la función serverless antes de desplegar
- Añadir validaciones adicionales de seguridad si el formulario se expone a clientes reales
- Revisar traducciones y textos en ambos idiomas antes de publicar

## 16. Contribución

1. Crear una rama nueva
2. Hacer cambios con un enfoque claro
3. Validar con ESLint y build
4. Probar en local antes de desplegar

## 17. Comandos útiles

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

```para poder usar la funcionalidad de correos en local
netlify dev
```

## 18. Estado del proyecto

El proyecto está estructurado como un sitio moderno de marketing y contacto para un espacio de eventos/hostelería, con base de React, diseño visual premium y soporte para envío automáticos de consultas por email mediante Netlify + Resend.

Si quieres, en el siguiente paso puedo dejarte también una versión más formal de esta documentación orientada a clientes, o una versión técnica con diagramas y explicación de cada componente.
