// Tarjeta de una inspiración: enlaza a su página de detalle (/inspiracion/:id)
const TarjetaInspiracion = {
    props: { inspiracion: { type: Object, required: true } },
    setup() {
        return { formatearFecha }
    },
    template: `
        <article class="inspiration-card">
            <router-link :to="'/inspiracion/' + inspiracion.id">
                <img class="inspiration-card__image" :src="inspiracion.imagen" :alt="inspiracion.alt" width="1400" height="800" loading="lazy">
            </router-link>
            <div class="inspiration-card__body">
                <h3 class="inspiration-card__title">{{ inspiracion.titulo }}</h3>
                <p class="inspiration-card__date">Fecha: <time :datetime="inspiracion.fecha">{{ formatearFecha(inspiracion.fecha) }}</time></p>
                <p class="inspiration-card__summary">{{ inspiracion.resumen }}</p>
            </div>
        </article>
    `,
}
