# Angular Starter — plantilla con layout y navegación

Proyecto basado en Angular 22 con una estructura común de aplicación:

- Header persistente.
- Menú superior con navegación mediante Angular Router.
- Área central dinámica mediante `router-outlet`.
- Footer persistente.
- Páginas de ejemplo: Inicio, Informes, Clientes y Configuración.

## Requisitos

- Node.js compatible con Angular 22.
- npm.

## Arranque

```bash
npm install
npm start
```

Abre http://localhost:4200.

## Compilación

```bash
npm run build
```

## Añadir una nueva página

1. Crea un componente standalone dentro de `src/app/pages/`.
2. Añade la ruta correspondiente en `src/app/app.routes.ts`.
3. Añade un enlace en `src/app/layout/navbar/navbar.ts`.

El header, el menú y el footer se mantienen al navegar; únicamente cambia el componente renderizado dentro de `router-outlet`.
