import { LitElement,html } from "lit-element";
import stylePecss from './perritos-componentStyle'

export class Perritos extends LitElement{

    registros(event) {
        event.preventDefault();
        window.location.href = '../adoptar/adoptar-componente.html';
      }
      
      redirect(event) {
        event.preventDefault();
        window.location.href = '../formA/nosotros.html';
      }
    
      redirect1(event) {
        event.preventDefault();
        window.location.href = '../adoptar/adoptar-componente.html';
      }
    
      redirect2(event) {
        event.preventDefault();
        window.location.href = "../../login.html";
      }
    
      cerrar(event) {
        event.preventDefault();
        window.location.href = '../../index.html';
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
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #61428C;">
<div class="container-fluid">
    <p class="h3 text-white">SAM</p>
    <form class="text-center" @submit="${this.redirect}">
        <button type="submit" class="btn btn-danger-1 text-white">Nosotros</button>
    </form>
    <form class="text-center" @submit="${this.redirect2}">
        <button type="submit" class="btn btn-danger-1 text-white" >Ingresar</button>
    </form>
    <form class="d-flex" @submit="${this.cerrar}">
        <button class="btn btn-outline-primary btn-cerrar-sesion" type="submit">Cerrar sesión</button>
    </form>
</div>
</nav>
<div class="container">
<div class="row row-cols-3 my-3">
    <div class="col mb-3">
        <div class="card" style="width: 20rem;">
        <img style="height: 13rem; background-position: center center; background-repeat: no-repeat; background-size: cover ; background-image: url('../../resources/perrito1.jpg');" class="card-img-top" >
            <div class="card-body">
              <h5 class="card-title border-bottom py-2">TONNI</h5>
              <p><strong>Edad:</strong><span class="form-control-sm">4 meses</span></p>
              <p><strong>Sexo:</strong><span class="form-control-sm">Masculino</span></p>
              <p><strong>Color:</strong><span class="form-control-sm">Negro - Blanco</span></p>
              <p><strong>Vacunado:</strong><span class="form-control-sm">Si</span></p>
              <form @submit="${this.redirect2}">
                  <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
              </form>
            </div>
          </div>
    </div>
    <div class="col mb-3">
        <div class="card" style="width: 20rem;">
            <img style="height: 13rem; background-position: center center; background-repeat: no-repeat; background-size: cover ; background-image: url('https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdCU3QnxlbnwwfHwwfHx8MA%3D%3D');" class="card-img-top" >
            <div class="card-body">
              <h5 class="card-title border-bottom py-2">JACK</h5>
              <p><strong>Edad:</strong><span class="form-control-sm">1 año</span></p>
              <p><strong>Sexo:</strong><span class="form-control-sm">Masculino</span></p>
              <p><strong>Color:</strong><span class="form-control-sm">Amarillo</span></p>
              <p><strong>Vacunado:</strong><span class="form-control-sm">Si</span></p>
              <form @submit="${this.redirect2}">
                  <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
              </form>
            </div>
          </div>
    </div>
    <div class="col mb-3">
        <div class="card" style="width: 20rem;">
            <img style="height: 13rem; background-position: center center; background-repeat: no-repeat; background-size: cover ; background-image: url('../../resources/perrito3.jpg');" class="card-img-top" >
            <div class="card-body">
              <h5 class="card-title border-bottom py-2">MOTAS</h5>
              <p><strong>Edad:</strong><span class="form-control-sm">2 año</span></p>
              <p><strong>Sexo:</strong><span class="form-control-sm">Hembra</span></p>
              <p><strong>Color:</strong><span class="form-control-sm">Blanco</span></p>
              <p><strong>Vacunado:</strong><span class="form-control-sm">Si</span></p>
              <form @submit="${this.redirect2}">
                  <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
              </form>
            </div>
          </div>
    </div>
    <div class="col mb-3">
        <div class="card" style="width: 20rem;">
            <img style="height: 13rem; background-position: center center; background-repeat: no-repeat; background-size: cover ; background-image: url('https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdCU3QnxlbnwwfHwwfHx8MA%3D%3D');" class="card-img-top" >
            <div class="card-body">
              <h5 class="card-title border-bottom py-2">TOM</h5>
              <p><strong>Edad:</strong><span class="form-control-sm">3 año</span></p>
              <p><strong>Sexo:</strong><span class="form-control-sm">Masculino</span></p>
              <p><strong>Color:</strong><span class="form-control-sm">Blanco</span></p>
              <p><strong>Vacunado:</strong><span class="form-control-sm">Si</span></p>
              <form @submit="${this.redirect2}">
                  <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
              </form>
            </div>
          </div>
    </div>
    <div class="col mb-3">
        <div class="card" style="width: 20rem;">
            <img style="height: 13rem; background-position: center center; background-repeat: no-repeat; background-size: cover ; background-image: url('https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdCU3QnxlbnwwfHwwfHx8MA%3D%3D');" class="card-img-top" >
            <div class="card-body">
              <h5 class="card-title border-bottom py-2">KIRA</h5>
              <p><strong>Edad:</strong><span class="form-control-sm">1 año</span></p>
              <p><strong>Sexo:</strong><span class="form-control-sm">Hembra</span></p>
              <p><strong>Color:</strong><span class="form-control-sm">Café</span></p>
              <p><strong>Vacunado:</strong><span class="form-control-sm">Si</span></p>
              <form @submit="${this.redirect2}">
                  <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
              </form>
            </div>
          </div>
    </div>
    <div class="col mb-3">
        <div class="card" style="width: 20rem;">
            <img style="height: 13rem; background-position: center center; background-repeat: no-repeat; background-size: cover ; background-image: url('https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdCU3QnxlbnwwfHwwfHx8MA%3D%3D');" class="card-img-top" >
            <div class="card-body">
              <h5 class="card-title border-bottom py-2">MICHI</h5>
              <p><strong>Edad:</strong><span class="form-control-sm">1 año</span></p>
              <p><strong>Sexo:</strong><span class="form-control-sm">Masculino</span></p>
              <p><strong>Color:</strong><span class="form-control-sm">Blanco - Café</span></p>
              <p><strong>Vacunado:</strong><span class="form-control-sm">Si</span></p>
              <form @submit="${this.redirect2}">
                  <button class="btn btn-secondary" style="background-color: #61428c;">Adoptame</button>
              </form>
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