// Ruta dinámica "/seccion/:nombre": secciones del menú todavía sin contenido
const Seccion = {
    setup() {
        const route = VueRouter.useRoute()
        const seccion = Vue.computed(() => secciones[route.params.nombre])

        return { seccion }
    },
    template: `
        <main class="detail">
            <section v-if="seccion">
                <h1 class="section-title">{{ seccion.titulo }}</h1>
                <p>{{ seccion.texto }}</p>
                <p>Esta sección estará disponible próximamente.</p>
            </section>

            <section v-else>
                <h1 class="section-title">Sección no encontrada</h1>
                <router-link class="btn btn--primary" to="/">Volver al inicio</router-link>
            </section>
        </main>
    `,
}
