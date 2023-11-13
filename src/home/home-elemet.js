import { LitElement, html } from "lit-element";
import styleCssn from "./style-elemet.js";
export class Home extends LitElement {
  static get styles() {
    return [styleCssn];
  }

  salir(event) {
    event.preventDefault();
    window.location.href = "../../login.html";
  }

  render() {
    return html`<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SAM</title>
    <link href="estilo.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>
  <body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Inicio</a>
            <button type="button" class="navbar-brand btn" style="color: #61428C !important;">Adopta</button>
            <a class="navbar-brand" href="./src/formA/nosotros.html">Blog</a>
            <a class="navbar-brand" href="#">Contactenos</a>
            <a class="navbar-brand" href="../../login.html">login</a>
          </div>
        </nav>
      </div>
    </nav>
        <div class="container-1">
          <div class="row">
            <div class="col">
              <div class="title-h6" style="color: #4B6AFF !important;">EN BUSCA DE UN PELUDITO?</div>
              <div class="h4">En SAM tenemos a muchos buscando un hogar</div>
              <p>Nos alegra saber que estas pensando en adoptar, todos nuestros peludos están a la
                espera de una familia y son entregados en óptimas condiciones de salud y belleza
                a adoptantes responsables y amorosos. En esta página conocerás nuestro proceso de adopción y requisitos, pero
                lo primero es conocer al peludo que deseas adoptar, si ya tienes su nombre sigue leyendo nuestras condiciones,
                de lo contrario puedes conocer todos nuestro peluditos en los siguientes links.</p>
            </div>
            <div class="col">
              <img src="img/adopcion1.png">
            </div>
          </div>
        </div>
        
    <div class="container-2">
      <div class="row">
        <div class="col">
          <div class="title-h6">REQUISITOS PARA ADOPTARME</div>
          <div class="h4">En SAM tenemos a muchos buscando un hogar</div>
          <p>
            Nos encantaría poder entregar un peludito a cada persona que desee adoptar, pero la gran responsabilidad que
            sentimos con nuestros ángeles nos obliga a tener unos requisitos mínimos que nos permitan tener cierta
            seguridad en que los hogares donde llegarán serán los definitivos.<br>
            <br>💛 La persona responsable del peludito debe ser mayor de 25 años.
            <br>💛 Este o esta pequeñita será miembro de la familia alrededor de 15 años.
            <br>💛 Diligencia el Pre-formulario de Adopción
            <br>💛 Los datos ingresados serán verificados por funcionarios de la Fundación (esta verificación tarda 3 días
            hábiles).
            <br>💛 Si tu solicitud y todo está en orden, nos contactaremos contigo para coordinar el día en que el
            peludito que escogiste llegue a tu casa.
            <br>💛 Por tema del Coronavirus no podemos hacer la visita domiciliaria, por eso te pedimos que grabes un
            video del lugar donde vivirá el peludito
            <br>💛 Es importante tener el tiempo y el espacio para que tú y ellos estén muy bien.
            <br>💛 Es importante contar con estabilidad económica, desde el primer momento que llegue a tus manos será una
            gran responsabilidad y requerirá de muchos cuidados y mimos para vivir feliz. Recuerda, todos han sido
            rescatados.<br>
            <br>🚫 Si vives en una zona de sobrepoblación canina o felina, te pedimos adoptes tú mismo a uno de la calle,
            se tú el salvador de ese peludito, así juntos podremos salvar más vidas!!
            ⚠️ Se deben cumplir los compromisos y obligaciones que figuran en el Contrato de Adopción.
            ⚠️Seguimos en constante seguimiento y comunicación para saber cómo va todo. Ellos siempre serán nuestros
            hijitos.
          </p>
        </div>
      </div>
    </div>
    <ul class="apoyo">
      <li>
        <span class="icon-cayuda"></span>
        <div class="box-txt">
          <img class="imagen" src="/img/ayudar.png"><br><br>
          <h3>COMO AYUDAR</h3>
          <p>Cada día se ven miles de animales abandonados en la calle que no tienen quién se responsabilice por ellos.
            Maneras de ayudar hay muchas, entre ellas: Puedes ser voluntario, ser hogar temporar o apadrinar uno de estos
            animalitos en algún albergue.</p>
          <a class="btn btn-lg" href="/por-que-adoptar">Conocer más</a>
        </div>
      </li>
      <li>
        <span class="icon-mperdida"></span>
        <div class="box-txt">
          <img class="imagen" src="/img/apadrinar.png"><br><br>
          <h3>APADRINAR</h3>
          <p>Si no puedes adoptar y deseas ayudar a un animal lo puedes apadrinar. Consiste en ofrecer un aporte
            voluntario mensual para su sustento hasta el día en que sea adoptado. Con esto, el animal que escojas, ya sea
            de la calle o de alguna fundación existente tendrá una buena calidad de vida mientras encuentra un verdadero
            hogar.</p>
          <a class="btn btn-lg" href="./src/formA/nosotros.html">Conocer más</a>
        </div>
      </li>
      <li>
        <span class="icon-huella"></span>
        <div class="box-txt">
          <img class="imagen" src="/img/adoptar.png"><br><br>
          <h3>ADOPTAR</h3>
          <p>No compres, ADOPTA. Adoptando salvas la vida de dos animales, la de tu nuevo amigo y la del que ocupará su
            lugar, tan solo escoge la mascota de la cual quieres recibir todo su amor y compañía, diligencia el formulario
            y en poco tiempo nos comunicaremos contigo.</p>
          <a class="btn btn-lg" href="./src/formA/nosotros.html">Conocer más</a>
        </div>
      </li>
    </ul>
    <footer>
      <div class="container">
        <p>&copy; 2023 Fundación SAM - Todos los derechos reservados</p>
        <ul>
          <li><a href="politica-de-privacidad.html">Política de Privacidad</a></li>
          <li><a href="terminos-y-condiciones.html">Términos y Condiciones</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </div>
    </footer>
  
  
  
  
  </body>`;
  }
}
customElements.define("home-element", Home);
