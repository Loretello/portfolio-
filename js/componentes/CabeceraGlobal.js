// Menú global: se muestra en todas las pantallas (está fuera de <router-view>)
const CabeceraGlobal = {
    template: `
        <header class="site-header">

            <router-link class="site-header__logo" to="/">MindBox</router-link>

            <nav class="site-header__nav" aria-label="Principal">
                <ul class="site-header__nav-list">
                    <li v-for="enlace in enlaces" :key="enlace.ruta">
                        <router-link
                            class="site-header__nav-link"
                            :class="{ 'site-header__nav-link--active': esActivo(enlace.ruta) }"
                            :to="enlace.ruta"
                            active-class=""
                            exact-active-class=""
                        >{{ enlace.texto }}</router-link>
                    </li>
                </ul>
            </nav>

            <ul class="site-header__actions">
                <li>
                    <button class="site-header__icon-btn" type="button" aria-label="Buscar">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="11" cy="11" r="7"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </li>
                <li>
                    <button class="site-header__icon-btn" type="button" aria-label="Notificaciones">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                    </button>
                </li>
                <li>
                    <button class="site-header__avatar-btn" type="button" aria-label="Ver perfil">
                        <img class="site-header__avatar" src="images/yop.jpg" alt="Foto de perfil" width="45" height="45">
                    </button>
                </li>
            </ul>

        </header>
    `,
    setup() {
        const route = VueRouter.useRoute()

        const enlaces = [
            { texto: "Inicio", ruta: "/" },
            { texto: "Tareas", ruta: "/seccion/tareas" },
            { texto: "Notas", ruta: "/seccion/notas" },
            { texto: "Inspiración", ruta: "/inspiracion" },
            { texto: "Configuración", ruta: "/seccion/configuracion" },
        ]

        // Inicio solo se marca en "/"; el resto también en sus subrutas (/inspiracion/3)
        function esActivo(ruta) {
            return ruta === "/" ? route.path === "/" : route.path.startsWith(ruta)
        }

        return { enlaces, esActivo }
    },
}
