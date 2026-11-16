// Ruta "/": dashboard y últimas inspiraciones
const Inicio = {
    components: { TarjetaInspiracion },
    setup() {
        const tarjetas = [
            { titulo: "Tareas", texto: "Organiza tus tareas diarias con facilidad.", boton: "Ver tareas", ruta: "/seccion/tareas" },
            { titulo: "Notas", texto: "Toma notas rápidas y accede a ellas en cualquier momento.", boton: "Ver notas", ruta: "/seccion/notas" },
            { titulo: "Inspiración", texto: "Encuentra inspiración para tus proyectos y tareas.", boton: "Ver inspiración", ruta: "/inspiracion" },
            { titulo: "Configuración", texto: "Personaliza la aplicación según tus preferencias.", boton: "Ver configuración", ruta: "/seccion/configuracion" },
        ]
        const ultimas = Vue.computed(() => inspiraciones.slice(0, 4))

        return { tarjetas, ultimas }
    },
    template: `
        <main>

            <section class="dashboard" aria-labelledby="titulo-dashboard">
                <h1 class="section-title" id="titulo-dashboard">Dashboard</h1>

                <div class="dashboard__grid">
                    <article class="card" v-for="tarjeta in tarjetas" :key="tarjeta.ruta">
                        <h3 class="card__title">{{ tarjeta.titulo }}</h3>
                        <p class="card__text">{{ tarjeta.texto }}</p>
                        <router-link class="card__action btn btn--primary" :to="tarjeta.ruta">{{ tarjeta.boton }}</router-link>
                    </article>
                </div>
            </section>

            <section class="inspiration-list" aria-labelledby="titulo-ultimas">
                <h2 class="section-title" id="titulo-ultimas">Últimas inspiraciones</h2>

                <div class="inspiration-list__grid">
                    <tarjeta-inspiracion v-for="item in ultimas" :key="item.id" :inspiracion="item"></tarjeta-inspiracion>
                </div>
            </section>

        </main>
    `,
}
