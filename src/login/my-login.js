import { LitElement, html, css } from 'lit-element';
import stylesLocss from './loginStyles';

export class LoginComponent extends LitElement {
  static get styles(){
    return [stylesLocss]
 }

  constructor() {
    super();
    this.username = '';
    this.password = '';
    this.errorMessage = '';
  }

  handleSubmit(event) {
    event.preventDefault();

    // Validación de datos quemados (usuario y contraseña)
    if (this.username === 'usuario' && this.password === 'contraseña') {
      // Datos válidos, redirige al usuario o realiza otras acciones
      window.location.href = 'src/dashboard/hp.html';
      alert('Inicio de sesión exitoso');
    } else {
      // Datos de inicio de sesión incorrectos, muestra un mensaje de error
      this.errorMessage = 'Credenciales incorrectas. Intente nuevamente.';
    }
  }

  registros(event) {
    event.preventDefault();
    window.location.href = 'src/register/register.html';
  }

  render() {
    return html`
    <html >
    <head>
    <meta charset="UTF-8" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/f31778972e.js" crossorigin="anonymous"></script>
            <title></title>
    </head>        
    
    <body >
    <div class="container-fluid">
       <div class="row">
           <div class="col-sm"></div>
              <div class="col-sm">
        <br>
        <br>
              <div class="card">

                  <div class="card-header bg-danger-1">
                        <div class="text-center">
                              <h3><b>LOGIN</b></h3>  
                          </div>
                    </div>
                  <div class="card-body">
                    <br>  
                          <form @submit="${this.handleSubmit}">
                    <div class="input-group ">

                      <input
                        class="form-control"
                        placeholder="Digite su usuario"
                        type="text"
                        id="username"
                        .value="${this.username}"
                        @input="${(e) => (this.username = e.target.value)}"
                        required
                      />
                    </div>
                    <br>
                    <div class="input-group ">

                      <input
                        class="form-control"
                        placeholder="Password" 
                        type="password"
                        id="password"
                        .value="${this.password}"
                        @input="${(e) => (this.password = e.target.value)}"
                        required
                      />
                    </div>
                    <br>
                    <br>
                    <br>
                    <div class="text-center">
                       <button type="submit" class="btn-danger-1">Ingresar</button>
                    </div>
                    <br> 

                  </form>
                  <form class="text-center" @submit="${this.registros}">
                    <button type="submit" class="btn-danger-1">registrate</button>
                    </form>
  
                    <br>  


        ${this.errorMessage ? html`<p style="color: red">${this.errorMessage}</p>` : ''}
        </div>
        </div>
        </div>
        <div class="col-sm"></div>
    </div>
</div>        </body>
    `;
  }
}

customElements.define('my-login', LoginComponent);
/*
 import { LitElement,css, html } from "lit-element";
import stylesLocss from './loginStyles';

export class LoginComponent extends LitElement{
  static get styles(){
    return [stylesLocss]
 }

       render(){
           return html`
<html>
  <head>
    <meta charset="UTF-8" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/f31778972e.js" crossorigin="anonymous"></script>
    <title>Mascotas</title>
  </head>        
        <body>
        <div class="container-fluid">
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
            <br>
            <br>
            <div class="card">
   
                <div class="card-header bg-danger-1">
                    <div class="text-center">
                        <h3>
                            <b>LOGIN.</b>
                        </h3>
                    </div>
                </div>
                    <div class="card-body">
                        <br>

                        <form>
                          <div class="input-group ">
                              <input type="text" class="form-control"  placeholder="Digite su usuario" required>
                          </div>
                          <br>
                       
                          <div class="input-group ">
                              <input type="text" class="form-control" placeholder="Password"  required >
                          </div>
                          <br>
                          <br>
                          <br>
                          <div class="text-center">
                            <button type="submit" class="btn-danger-1">Ingresar</button>
                          </div>
                          <br>    
                          <br>                                                                            
                        </form>
                    </div>
                </div>
              </div>
            <div class="col-sm"></div>
        </div>
     

    </div>       
  </body>
</html>
        `;
    }
  }
customElements.define("my-login", LoginComponent); */