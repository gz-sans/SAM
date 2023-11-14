import { LitElement, html, css } from "lit-element";
import stylescss from "./contact-componentStyles.js";

class Contact extends LitElement {
    static get styles() {
        return [stylescss];
      }
      render() {
        return html`  <body>
        <header>
          <h1>Contáctenos</h1>
        </header>
        <a class="salir-button" href="../../index.html">Salir</a>
        <main>
          <section>
            <h2>Información de Contacto</h2>
            <p>
              Si tienes alguna pregunta, inquietud o deseas ponerte en contacto con
              nosotros, estamos aquí para ayudarte. Puedes comunicarte con nuestro
              equipo de la siguiente manera:
            </p>
            <ul>
              <li>
                Correo Electrónico:
                <a href="mailto:contacto@mascotasfelices.com"
                  >contacto@mascotasfelices.com</a
                >
              </li>
              <li>Teléfono: +1-800-123-4567</li>
              <li>
                Dirección: 123 Calle de las Mascotas Felices, Ciudad de Ejemplo,
                País Ejemplo
              </li>
              <li>
                Horario de Atención al Cliente: Lunes a Viernes, de 9:00 a.m. a 5:00
                p.m.
              </li>
            </ul>
          </section>
    
          <section>
            <h2>Formulario de Contacto</h2>
            <form action="#" method="post">
              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />
    
              <label for="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required />
    
              <label for="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
    
              <input type="submit" value="Enviar" />
            </form>
          </section>
    
          <section>
            <h2>Redes Sociales</h2>
            <p>
              Síguenos en nuestras redes sociales para mantenerte actualizado sobre
              las últimas adopciones, noticias y eventos:
            </p>
            <ul>
              <li>
                <a href="https://www.facebook.com/mascotasfelices" target="_blank"
                  >Enlace a nuestra página de Facebook</a
                >
              </li>
              <li>
                <a href="https://www.twitter.com/mascotasfelices" target="_blank"
                  >Enlace a nuestra cuenta de Twitter</a
                >
              </li>
              <li>
                <a href="https://www.instagram.com/mascotasfelices" target="_blank"
                  >Enlace a nuestra cuenta de Instagram</a
                >
              </li>
            </ul>
          </section>
        </main>
      </body>`
    }
}

customElements.define("contact-component", Contact);