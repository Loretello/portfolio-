// Formulario para añadir una inspiración a la lista
const FormularioInspiracion = {
    setup() {
        const vacio = () => ({ titulo: "", categoria: "", fecha: "", enlace: "", tipo: "Imagen", comentario: "", favorita: false })
        const datos = Vue.reactive(vacio())
        const guardada = Vue.ref(false)

        function guardar() {
            inspiraciones.unshift({
                id: Math.max(...inspiraciones.map((i) => i.id)) + 1,
                titulo: datos.titulo.trim(),
                fecha: datos.fecha || new Date().toISOString().slice(0, 10),
                categoria: datos.categoria,
                imagen: imagenPorCategoria[datos.categoria],
                alt: `Imagen de la categoría ${datos.categoria}`,
                resumen: datos.comentario.trim() || "Sin comentario.",
            })
            Object.assign(datos, vacio())
            guardada.value = true
        }

        return { datos, guardada, guardar }
    },
    template: `
        <section class="inspiration-form" aria-labelledby="titulo-formulario">

            <h1 class="section-title" id="titulo-formulario">Añadir una inspiración</h1>

            <form class="inspiration-form__panel" @submit.prevent="guardar">

                <p v-if="guardada" class="message" role="status">¡Inspiración guardada! La verás al inicio de la lista.</p>

                <div class="inspiration-form__row">

                    <div class="inspiration-form__field">
                        <label class="inspiration-form__label" for="inspiration-title">Título</label>
                        <input class="inspiration-form__input" type="text" id="inspiration-title" v-model="datos.titulo" placeholder="Escribe el título..." maxlength="80" required>
                    </div>

                    <div class="inspiration-form__field">
                        <label class="inspiration-form__label" for="inspiration-category">Categoría</label>
                        <select class="inspiration-form__input" id="inspiration-category" v-model="datos.categoria" required>
                            <option value="">Selecciona una categoría</option>
                            <option>Naturaleza</option>
                            <option>Ciudad</option>
                            <option>Diseño</option>
                            <option>Otra</option>
                        </select>
                    </div>

                </div>

                <div class="inspiration-form__row">

                    <div class="inspiration-form__field">
                        <label class="inspiration-form__label" for="inspiration-date">Fecha</label>
                        <input class="inspiration-form__input" type="date" id="inspiration-date" v-model="datos.fecha">
                    </div>

                    <div class="inspiration-form__field">
                        <label class="inspiration-form__label" for="inspiration-link">Enlace de referencia</label>
                        <input class="inspiration-form__input" type="url" id="inspiration-link" v-model="datos.enlace" placeholder="https://...">
                    </div>

                </div>

                <fieldset class="inspiration-form__field">
                    <legend class="inspiration-form__label">Tipo de inspiración</legend>
                    <div class="inspiration-form__options">
                        <label class="inspiration-form__option"><input type="radio" value="Imagen" v-model="datos.tipo"> Imagen</label>
                        <label class="inspiration-form__option"><input type="radio" value="Texto" v-model="datos.tipo"> Texto</label>
                        <label class="inspiration-form__option"><input type="radio" value="Idea" v-model="datos.tipo"> Idea</label>
                    </div>
                </fieldset>

                <div class="inspiration-form__field">
                    <label class="inspiration-form__label" for="inspiration-comment">Comentario</label>
                    <textarea class="inspiration-form__textarea" id="inspiration-comment" v-model="datos.comentario" rows="6" placeholder="Escribe el texto que te inspira...." maxlength="500"></textarea>
                </div>

                <label class="inspiration-form__option">
                    <input type="checkbox" v-model="datos.favorita"> Marcar como favorita
                </label>

                <div class="inspiration-form__actions">
                    <button class="inspiration-form__submit btn btn--primary" type="submit">Guardar</button>
                </div>

            </form>

        </section>
    `,
}
