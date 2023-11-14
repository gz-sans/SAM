import { LitElement, html } from "lit-element";
import stylePecss from "./perritos-componentStyle";

export class Perritos extends LitElement {
  registros(event) {
    event.preventDefault();
    window.location.href = "../adoptar/adoptar-componente.html";
  }

  redirect(event) {
    event.preventDefault();
    window.location.href = "../formA/nosotros.html";
  }

  redirect1(event) {
    event.preventDefault();
    window.location.href = "../adoptar/adoptar-componente.html";
  }

  redirect2(event) {
    event.preventDefault();
    window.location.href = "../dashboard/hp.html";
  }

  cerrar(event) {
    event.preventDefault();
    window.location.href = "../../index.html";
  }
  render() {
    return html`
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SAM</title>
    <link href="estilo.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #61428C;">
<div class="container-fluid">
    <p class="h3 text-white">SAM</p>
    <form class="text-center" @submit="${this.redirect}">
        <button type="submit" class="btn btn-danger-1 text-white">Nosotros</button>
    </form>
    <form class="text-center" @submit="${this.redirect2}">
        <button type="submit" class="btn btn-danger-1 text-white" >Dashboard</button>
    </form>
    <form class="d-flex" @submit="${this.cerrar}">
        <button class="btn btn-outline-primary btn-cerrar-sesion" type="submit">Cerrar sesión</button>
    </form>
</div>
</nav>
<div class="contenido">
    <div class="container mt-4">
        <div class="row d-flex">
            <div class="col-md-4 mb-4">
                <div class="card mb-4">
                    <center>
                    <div class="card-mascotas">
                        <img src="../../resources/perrito7.jpg" class="card-img-top" alt="TONNI">
                        <div class="card-body">
                            <h5 class="card-title">BRUNO</h5>
                            <p class="card-text"><strong>Edad:</strong>1 Año</p>
                            <p class="card-text"><strong>Sexo:</strong> Macho</p>
                            <p class="card-text"><strong>Color:</strong> Negro-Cafe</p>
                            <p class="card-text"><strong>Vacunado:</strong> Si</p>
                            <form @submit="${this.registros}">
                                <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                            </form>
                        </div>
                    </div>
                    </center>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card mb-4">
                    <center>
                        <img src="../../resources/perrito8.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">TONNI</h5>
                            <p class="card-text"><strong>Edad:</strong> 4 meses</p>
                            <p class="card-text"><strong>Sexo:</strong> Macho</p>
                            <p class="card-text"><strong>Color:</strong> Negro-Blanco</p>
                            <p class="card-text"><strong>Vacunado:</strong> Si</p>
                            <form @submit="${this.registros}">
                                <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                            </form>
                        </div>
                    </center>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card mb-4">
                <center>
                    <img src="../../resources/perrito9.jpg" class="card-img-top" alt="Descripción de la imagen">
                    <div class="card-body">
                        <h5 class="card-title">JACK</h5>
                          <p class="card-text"><strong>Edad:</strong> 1 año</p>
                            <p class="card-text"><strong>Sexo:</strong> Macho</p>
                            <p class="card-text"><strong>Color:</strong> Amarillo</p>
                            <p class="card-text"><strong>Vacunado:</strong> Si</p>
                        <form @submit="${this.registros}">
                            <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                        </form>
                    </div>
                </center>
                </div>
            </div>
        </div>
    </div>

        <div class="container mt-4">
            <div class="row d-flex">
                <div class="col-md-4">
                    <div class="card mb-4">
                    <center>
                        <img src="../../resources/perrito4.jpg" class="card-img-top" alt="TONNI">
                        <div class="card-body">
                            <h5 class="card-title">MOTAS</h5>
                            <p class="card-text"><strong>Edad:</strong> 2 años</p>
                            <p class="card-text"><strong>Sexo:</strong> Hembra</p>
                            <p class="card-text"><strong>Color:</strong> Blanco</p>
                            <p class="card-text"><strong>Vacunado:</strong> si</p>
                            <form @submit="${this.registros}">
                                <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                            </form>
                        </div>
                    </center>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                    <center>
                        <img src="../../resources/perrito5.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">TOM</h5>
                            <p class="card-text"><strong>Edad:</strong> 3 años</p>
                            <p class="card-text"><strong>Sexo:</strong> Macho</p>
                            <p class="card-text"><strong>Color:</strong> Blanco</p>
                            <p class="card-text"><strong>Vacunado:</strong> si</p>
                            <form @submit="${this.registros}">
                                <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                            </form>
                        </div>
                    </center>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                    <center>
                        <img src="../../resources/perrito6.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">KIRA</h5>
                            <p class="card-text"><strong>Edad:</strong> 1 año</p>
                            <p class="card-text"><strong>Sexo:</strong> Hembra</p>
                            <p class="card-text"><strong>Color:</strong> Cafe</p>
                            <p class="card-text"><strong>Vacunado:</strong> si</p>
                            <form @submit="${this.registros}">
                                <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                            </form>
                        </div>
                    </center>
                    </div>
                </div>
        
            </div>
        </div>
        <div class="container mt-4">
            <div class="row d-flex">
                <div class="col-md-4">
                    <div class="card mb-4">
                    <center>
                        <img src="../../resources/gatito1.jpg" class="card-img-top" alt="TONNI">
                        <div class="card-body">
                            <h5 class="card-title">MICHI</h5> 
                            <p class="card-text"><strong>Edad:</strong> 2 años</p>
                            <p class="card-text"><strong>Sexo:</strong> Hembra</p>
                            <p class="card-text"><strong>Color:</strong> Blanco-Cafe</p>
                            <p class="card-text"><strong>Vacunado:</strong> si</p>
                            <form @submit="${this.registros}">
                                <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                            </form>
                        </div>
                    </center>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                    <center>
                        <img src="../../resources/gatito2.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">LULU</h5>
                            <p class="card-text"><strong>Edad:</strong> 3 meses</p>
                            <p class="card-text"><strong>Sexo:</strong> Hembra</p>
                            <p class="card-text"><strong>Color:</strong> Blanco-Cafe-Negro</p>
                            <p class="card-text"><strong>Vacunado:</strong> si</p>
                            <form @submit="${this.registros}">
                                <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                            </form>
                        </div>
                    </center>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                    <center>
                        <img src="../../resources/gatito3.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">ZOE</h5>
                            <p class="card-text"><strong>Edad:</strong> 4 añoS</p>
                            <p class="card-text"><strong>Sexo:</strong> Hembra</p>
                            <p class="card-text"><strong>Color:</strong> Blanco-Negro</p>
                            <p class="card-text"><strong>Vacunado:</strong> si</p>
                            <form @submit="${this.registros}">
                                <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                            </form>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-4">
            <div class="row d-flex">
                <div class="col-md-4">
                    <div class="card mb-4">
                    <center>
                        <img src="../../resources/gatito4.jpg" class="card-img-top" alt="TONNI">
                        <div class="card-body">
                            <h5 class="card-title">GARRA</h5> 
                            <p class="card-text"><strong>Edad:</strong> 5 años</p>
                            <p class="card-text"><strong>Sexo:</strong> Macho</p>
                            <p class="card-text"><strong>Color:</strong> Gris</p>
                            <p class="card-text"><strong>Vacunado:</strong> si</p>
                            <form @submit="${this.registros}">
                                <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                            </form>
                        </div>
                    </center>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                    <center>
                        <img src="../../resources/gatito5.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">BOB</h5>
                            <p class="card-text"><strong>Edad:</strong> 1 año</p>
                            <p class="card-text"><strong>Sexo:</strong> Hembra</p>
                            <p class="card-text"><strong>Color:</strong> Blanco</p>
                            <p class="card-text"><strong>Vacunado:</strong> si</p>
                            <form @submit="${this.registros}">
                                <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                    <center>
                        <img src="../../resources/gatito6.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">RABITO</h5>
                            <p class="card-text"><strong>Edad:</strong> 6 meses</p>
                            <p class="card-text"><strong>Sexo:</strong> Macho</p>
                            <p class="card-text"><strong>Color:</strong> Blanco-Negro</p>
                            <p class="card-text"><strong>Vacunado:</strong> si</p>
                            <form @submit="${this.registros}">
                                <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                            </form>
                        </div>
                    </center>
                    </div>
                </div>
        
            </div>
        </div>
        </div>
    </div>
</body>
</html>
`;
  }

  static get styles() {
    return stylePecss;
  }
}

customElements.define("perritos-component", Perritos);
