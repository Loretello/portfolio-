// Ruta "/inspiracion": formulario y listado completo
const Inspiraciones = {
    components: { TarjetaInspiracion, FormularioInspiracion },
    setup() {
        return { inspiraciones }
    },
    template: `
        <main>

            <formulario-inspiracion></formulario-inspiracion>

            <section class="inspiration-list" aria-labelledby="titulo-lista">
                <h2 class="section-title" id="titulo-lista">Todas las inspiraciones</h2>

                <div class="inspiration-list__grid">
                    <tarjeta-inspiracion v-for="item in inspiraciones" :key="item.id" :inspiracion="item"></tarjeta-inspiracion>
                </div>
            </section>

        </main>
    `,
}
