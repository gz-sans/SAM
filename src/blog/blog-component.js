import { LitElement, html, css } from "lit-element";
import stylescss from "./blog-componentStyles.js";

class Blog extends LitElement {
    static get styles() {
        return [stylescss];
      }
      render() {
        return html`
        <body>
        <header>
          <h1>Historias de Amor y Esperanza</h1>
          <p>Nuestros Peludos en Busca de Hogar</p>
        </header>
        <nav>
          <ul>
            <li><a class="salir-button" href="../../index.html">Salir</a></li>
            <li><a href="#introduccion">Introducción</a></li>
            <li><a href="#articulo1">Artículo 1</a></li>
            <li><a href="#articulo2">Artículo 2</a></li>
            <li><a href="#articulo3">Artículo 3</a></li>
            <li><a href="#articulo4">Artículo 4</a></li>
            <li><a href="#articulo5">Artículo 5</a></li>
            <li><a href="#articulo6">Artículo 6</a></li>
            <li><a href="#articulo7">Artículo 7</a></li>
            <li><a href="#articulo8">Artículo 8</a></li>
          </ul>
        </nav>
        <main>
          <article id="introduccion">
            <h2>Introducción</h2>
            <p>
              ¡Bienvenidos a nuestro blog de adopción de mascotas! En este espacio,
              compartiremos historias conmovedoras, consejos útiles y noticias
              emocionantes sobre los animales que buscan un hogar amoroso. Cada
              peludo tiene su propia historia especial, y estamos aquí para unir a
              estos compañeros de cuatro patas con las familias que los necesitan.
              ¡Acompáñanos en este viaje lleno de amor y esperanza!
            </p>
          </article>
    
          <article id="articulo1">
            <h2>El Proceso de Adopción Paso a Paso</h2>
            <p>
              En este primer artículo, explicaremos en detalle cómo funciona el
              proceso de adopción. Desde la solicitud inicial hasta la aprobación y
              finalmente llevar a tu nuevo amigo peludo a casa. También
              proporcionaremos consejos sobre cómo prepararte para la llegada de tu
              mascota adoptada.
            </p>
          </article>
    
          <article id="articulo2">
            <h2>Historias de Éxito: Adopciones que Cambiaron Vidas</h2>
            <p>
              Aquí, compartiremos historias inspiradoras de adopciones anteriores.
              Conocerás a las mascotas que encontraron un hogar amoroso y a las
              familias que les dieron una segunda oportunidad en la vida. Estas
              historias demuestran que la adopción es una experiencia gratificante
              tanto para los humanos como para los animales.
            </p>
          </article>
    
          <article id="articulo3">
            <h2>Cómo Cuidar de tu Mascota Adoptada</h2>
            <p>
              En este artículo, ofreceremos consejos y recomendaciones sobre el
              cuidado de tu nueva mascota adoptada. Discutiremos temas como la
              alimentación, el ejercicio, la atención veterinaria y la importancia
              de la socialización.
            </p>
          </article>
    
          <article id="articulo4">
            <h2>
              Voluntariado en el Refugio: Cómo Ayudar a los Animales Necesitados
            </h2>
            <p>
              Animamos a nuestros lectores a considerar el voluntariado en un
              refugio de animales. Explicaremos cómo puedes contribuir con tu tiempo
              y energía para ayudar a los peludos que aún esperan un hogar. También
              destacaremos las satisfacciones personales que conlleva el
              voluntariado.
            </p>
          </article>
    
          <article id="articulo5">
            <h2>La Importancia de la Esterilización y la Castración</h2>
            <p>
              Hablaremos sobre la importancia de la esterilización y la castración
              para controlar la población de animales y prevenir el sufrimiento
              innecesario. Compartiremos información sobre programas de
              esterilización y castración asequibles y la responsabilidad de los
              dueños de mascotas.
            </p>
          </article>
    
          <article id="articulo6">
            <h2>Consejos para Encontrar la Mascota Perfecta para tu Hogar</h2>
            <p>
              Ayudaremos a los lectores a tomar decisiones informadas al elegir una
              mascota que se adapte a su estilo de vida y necesidades. Discutiremos
              factores como el tamaño, la edad y la energía de la mascota, así como
              el ambiente en el que vivirán.
            </p>
          </article>
    
          <article id="articulo7">
            <h2>Eventos de Adopción y Campañas Especiales</h2>
            <p>
              Mantendremos a nuestros lectores informados sobre eventos de adopción
              locales y campañas especiales que puedan ofrecer oportunidades únicas
              para encontrar un nuevo amigo peludo.
            </p>
          </article>
    
          <article id="articulo8">
            <h2>Amor Incondicional: Cómo las Mascotas Nos Cambian la Vida</h2>
            <p>
              Cerraremos con un artículo que destaca los innumerables beneficios
              emocionales y la alegría que las mascotas aportan a nuestras vidas.
              Exploraremos cómo estos compañeros de cuatro patas nos llenan de amor
              y nos enseñan lecciones valiosas.
            </p>
          </article>
        </main>
    
        <footer>
          <p>&copy; 2023 Historias de Amor y Esperanza</p>
        </footer>
      </body>`
    }
}

customElements.define("blog-component", Blog);