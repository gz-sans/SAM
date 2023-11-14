import { LitElement, html } from "lit-element";
import stylesLocss from './user-componentStyle';

export class UserComponent extends LitElement{
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
        window.location.href = '../dashboard/hp.html';
      }
    
      cerrar(event) {
        event.preventDefault();
        window.location.href = '../../index.html';
      }

       render(){
           return html`

           <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SAM</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  </head>
  <body>
    <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SAM</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  </head>
  <body>
    <div class="section">
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #61428C;">
        <div class="container-fluid">
            <p class="h3 text-white">Mascotas</p>
            <form class="text-center" @submit="${this.redirect}">
                <button type="submit" class="btn btn-danger-1 text-white">Nosotros</button>
            </form>
            <form class="text-center" @submit="${this.redirect2}">
                <button type="submit" class="btn btn-danger-1 text-white" >Adoptar</button>
            </form>
            <form class="d-flex" @submit="${this.cerrar}">
                <button class="btn btn-outline-primary btn-cerrar-sesion" type="submit">Cerrar sesión</button>
            </form>
        </div>
    </nav>
    <!-- CONTENIDO GENERAL -->
    <div class="container mt-5">
      <h1>Perfil</h1>
      <p>Aqui puedes modificar tus datos personales</p>
  </div>
  <div class="container-fluid py-5">    
      <div class="container d-flex align-content-center justify-content-center">
          <div class="container my-3">
              <div class="container-fluid"><img src="https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" class="img-fluid shadow" alt="Imagen Perfil" style="max-width: 500px;"></div>
          </div>
          <div class="container my-3">
              <div class="container-fluid ">
                  <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" placeholder="name@example.com">
                  </div>
                  <div class="mb-3">
                      <label class="form-label">Nombres Completos</label>
                      <input type="email" class="form-control" placeholder="name@example.com">
                  </div>
                  <div class="mb-3">
                      <label class="form-label">Contraseña</label>
                      <input type="email" class="form-control" placeholder="name@example.com">
                  </div>
              </div>
          </div>
      </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
  </body>

        `;
       }
       static get styles() {
         return stylesLocss;
       }
     }
     
     customElements.define("user-component", UserComponent);