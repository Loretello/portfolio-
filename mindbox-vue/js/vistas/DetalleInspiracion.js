// Ruta dinámica "/inspiracion/:id": detalle de una inspiración
const DetalleInspiracion = {
    setup() {
        const route = VueRouter.useRoute()

        const posicion = Vue.computed(() => inspiraciones.findIndex((i) => i.id === Number(route.params.id)))
        const inspiracion = Vue.computed(() => inspiraciones[posicion.value])
        const anterior = Vue.computed(() => inspiraciones[posicion.value - 1])
        const siguiente = Vue.computed(() => inspiraciones[posicion.value + 1])

        return { inspiracion, anterior, siguiente, formatearFecha }
    },
    template: `
        <main class="detail">

            <router-link class="detail__back" to="/inspiracion">← Volver a inspiraciones</router-link>

            <article v-if="inspiracion" class="detail__panel">
                <img class="detail__image" :src="inspiracion.imagen" :alt="inspiracion.alt">
                <div class="detail__body">
                    <h1 class="section-title">{{ inspiracion.titulo }}</h1>
                    <p class="detail__meta">
                        {{ inspiracion.categoria }} ·
                        <time :datetime="inspiracion.fecha">{{ formatearFecha(inspiracion.fecha) }}</time>
                    </p>
                    <p>{{ inspiracion.resumen }}</p>
                </div>
            </article>

            <section v-else>
                <h1 class="section-title">Inspiración no encontrada</h1>
                <p>La inspiración que buscas no existe.</p>
            </section>

            <nav v-if="inspiracion" class="detail__nav" aria-label="Otras inspiraciones">
                <router-link v-if="anterior" class="btn btn--primary" :to="'/inspiracion/' + anterior.id">← {{ anterior.titulo }}</router-link>
                <span v-else></span>
                <router-link v-if="siguiente" class="btn btn--primary" :to="'/inspiracion/' + siguiente.id">{{ siguiente.titulo }} →</router-link>
            </nav>

        </main>
    `,
}
