import { LitElement,html } from "lit-element";
import stylePecss from './perritos-componentStyle'

export class Perritos extends LitElement{

    registros(event) {
        event.preventDefault();
        window.location.href = './src/adoptar-componente.html';
      }
      

    render(){
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
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="Boutique pets logo dogs pet shop.png" alt="Logo" width="150" height="150">
            </a>
        </div>
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Inicio</a>
                    <button type="button" class="navbar-brand btn btn-light">Adopta</button>
                    <a class="navbar-brand" href="#">Blog</a>
                    <a class="navbar-brand" href="#">Contactenos</a>
                </div>
            </nav>
        </div>
    </nav>

<div class="contenido">
        <div class="container mt-4">
            <div class="row d-flex">
                <div class="col-md-4">
                    <div class="card-mascotas " >
                        <img src="./resources/perrito7.jpg" class="card-img-top" alt="TONNI">
                        <div class="card-body">
                            <h5 class="card-title">Título de la tarjeta</h5>
                            <p class="card-text">Texto de la tarjeta</p>
                            <form @submit="${this.registros}">
                    <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                    </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4" style="width: 18rem;">
                        <img src="./resources/perrito8.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">Título de la tarjeta</h5>
                            <p class="card-text">Texto de la tarjeta</p>
                            <form @submit="${this.registros}">
                    <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                    </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4" style="width: 18rem;">
                        <img src="./resources/perrito9.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">Título de la tarjeta</h5>
                            <p class="card-text">Texto de la tarjeta</p>
                            <form @submit="${this.registros}">
                    <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                    </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="container mt-4">
            <div class="row d-flex">
                <div class="col-md-4">
                    <div class="card mb-4" style="width: 18rem;">
                        <img src="./resources/perrito4.jpg" class="card-img-top" alt="TONNI">
                        <div class="card-body">
                            <h5 class="card-title">Título de la tarjeta</h5>
                            <p class="card-text">Texto de la tarjeta</p>
                            <form @submit="${this.registros}">
                    <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                    </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4" style="width: 18rem;">
                        <img src="./resources/perrito5.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">Título de la tarjeta</h5>
                            <p class="card-text">Texto de la tarjeta</p>
                            <form @submit="${this.registros}">
                    <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                    </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4" style="width: 18rem;">
                        <img src="./resources/perrito6.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">Título de la tarjeta</h5>
                            <p class="card-text">Texto de la tarjeta</p>
                            <form @submit="${this.registros}">
                    <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                    </form>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
        <div class="container mt-4">
            <div class="row d-flex">
                <div class="col-md-4">
                    <div class="card mb-4" style="width: 18rem;">
                        <img src="./resources/gatito1.jpg" class="card-img-top" alt="TONNI">
                        <div class="card-body">
                            <h5 class="card-title">Título de la tarjeta</h5>
                            <p class="card-text">Texto de la tarjeta</p>
                            <form @submit="${this.registros}">
                    <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                    </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4" style="width: 18rem;">
                        <img src="./resources/gatito2.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">Título de la tarjeta</h5>
                            <p class="card-text">Texto de la tarjeta</p>
                            <form @submit="${this.registros}">
                    <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                    </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4" style="width: 18rem;">
                        <img src="./resources/gatito3.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">Título de la tarjeta</h5>
                            <p class="card-text">Texto de la tarjeta</p>
                            <form @submit="${this.registros}">
                            <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                            </form>
                        </div>
                    </div>
                </div>
        
            </div>
            
        </div>
        <div class="container mt-4">
            <div class="row d-flex">
                <div class="col-md-4">
                    <div class="card mb-4" style="width: 18rem;">
                        <img src="./resources/gatito4.jpg" class="card-img-top" alt="TONNI">
                        <div class="card-body">
                            <h5 class="card-title">Título de la tarjeta</h5>
                            <p class="card-text">Texto de la tarjeta</p>
                            <form @submit="${this.registros}">
                            <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4" style="width: 18rem;">
                        <img src="./resources/gatito5.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">Título de la tarjeta</h5>
                            <p class="card-text">Texto de la tarjeta</p>
                            <form @submit="${this.registros}">
                    <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                    </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4" style="width: 18rem;">
                        <img src="./resources/gatito6.jpg" class="card-img-top" alt="Descripción de la imagen">
                        <div class="card-body">
                            <h5 class="card-title">Título de la tarjeta</h5>
                            <p class="card-text">Texto de la tarjeta</p>
                            <form @submit="${this.registros}">
                    <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
                    </form>
                        </div>
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