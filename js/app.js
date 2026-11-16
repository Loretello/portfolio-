// Aplicación Vue: rutas, menú global y pie de página.
// Se usan rutas con # (/#/inspiracion/3) para que el sitio funcione en Netlify sin configuración extra.
const App = {
    components: { CabeceraGlobal },
    template: `
        <cabecera-global></cabecera-global>

        <router-view></router-view>

        <footer class="site-footer">
            <p class="site-footer__text">© 2025 MindBox. Todos los derechos reservados.</p>
            <p class="site-footer__text">
                Hecho con
                <a class="site-footer__link" href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a> y
                <a class="site-footer__link" href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue Router</a>
            </p>
        </footer>
    `,
}

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: "/", component: Inicio, meta: { titulo: "Inicio" } },
        { path: "/inspiracion", component: Inspiraciones, meta: { titulo: "Inspiración" } },
        { path: "/inspiracion/:id", component: DetalleInspiracion, meta: { titulo: "Detalle" } },
        { path: "/seccion/:nombre", component: Seccion, meta: { titulo: "Sección" } },
        { path: "/:pathMatch(.*)*", component: NoEncontrada, meta: { titulo: "No encontrada" } },
    ],
    scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
    document.title = `MindBox · ${to.meta.titulo}`
})

Vue.createApp(App).use(router).mount("#app")
