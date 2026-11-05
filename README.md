# Portafolio · Heyder Medrano Olier

Sitio personal publicado en **https://hmedrano-gif.github.io**.

Ingeniero de Sistemas | Analítica de Datos | Inteligencia Artificial | Desarrollo de Software

## Stack

| Pieza | Uso |
|---|---|
| [Astro 5](https://astro.build) | Sitio estático, componentes `.astro` |
| [Tailwind CSS 4](https://tailwindcss.com) | Estilos, modo claro y oscuro |
| GitHub Actions + GitHub Pages | Construcción y publicación automáticas |

Partió de la plantilla [devportfolio](https://github.com/RyanFitzgerald/devportfolio) de Ryan Fitzgerald (licencia MIT, ver `LICENSE.md`). Los componentes, el diseño y el contenido fueron reescritos.

## Estructura

```
src/
├─ data/perfil.ts        ← TODO el contenido: perfil, proyectos, tecnologías, docencia, investigación
├─ layouts/Base.astro    ← <head>, SEO, datos estructurados, modo oscuro
├─ components/
│  ├─ Navegacion.astro   ← barra fija, menú móvil, cambio de tema
│  ├─ Seccion.astro      ← encabezado común de cada sección
│  └─ TarjetaProyecto.astro
├─ pages/index.astro     ← página única con las 7 secciones
└─ styles/global.css     ← paleta (azul marino, azul tecnológico) y tipografía
.github/workflows/deploy.yml
```

## Agregar o cambiar un proyecto

1. Edita `src/data/perfil.ts`, arreglo `proyectos`.
2. Cada proyecto necesita un **enlace verificable** (`repo`). Solo se listan repositorios públicos.
3. `npm run build` debe terminar sin errores.

## Ejecutar en local

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build      # genera dist/
```

## Publicación

En el repositorio `hmedrano-gif.github.io`: **Settings → Pages → Source: GitHub Actions**. Cada push a `main` publica el sitio.

El sitio de usuario ocupa la raíz del dominio. Los sitios de proyecto, como `https://hmedrano-gif.github.io/CURN/`, siguen funcionando: cada repositorio publica su propia ruta.

## Reglas de contenido

- Nada sin verificar: ni métricas, ni clientes, ni certificaciones que no estén documentados.
- No se muestran repositorios privados.
- Las instituciones aparecen solo como contexto académico.
