# MindBox · Vue 3 + Vue Router

Aplicación web sencilla con Vue.js y Vue Router (sin paso de compilación: se abre `index.html` o se publica tal cual en Netlify).

## Navegación
- Menú global (`js/componentes/CabeceraGlobal.js`), visible en todas las pantallas.

## Rutas
| URL | Vista |
| --- | --- |
| `/#/` | Inicio (dashboard y últimas inspiraciones) |
| `/#/inspiracion` | Formulario y listado de inspiraciones |
| `/#/inspiracion/:id` | Ruta dinámica: detalle (por ejemplo `/#/inspiracion/3`) |
| `/#/seccion/:nombre` | Ruta dinámica: Tareas, Notas y Configuración |
| cualquier otra | Página 404 |

## Despliegue
Sitio estático: en Netlify, "Build command" vacío y "Publish directory" `.` (raíz del repositorio).
