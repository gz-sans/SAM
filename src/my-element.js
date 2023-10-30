import { LitElement, html, css } from "lit-element";
import stylescss from './my-elementStyle'

class MyElement extends LitElement {
  static get styles(){
      return [stylescss]
   }

  render() {
    return html`
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
          <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
          <script src="https://kit.fontawesome.com/f31778972e.js" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="css/index.css">
          <title>SITS</title>
        </head>
        <body class="bg-cover bg-center">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-1"></div>
              <div class="col-sm-10 text-center">
                <img src="resources/img/logo2.png" class="logo-index-login">
              </div>
              <div class="col-sm-1"></div>
            </div>
            <div class="row">
              <div class="col-sm-4"></div>
              <div class="col-sm-4">
                <div class="card bg-body-danger card-box">
                  <div class="card-header bg-red-pumas">
                    <div class="text-center">
                      <h3>PUMAS DC.</h3>
                    </div>
                  </div>
                  <form class="card-login" method="post">
                    <br>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control input-pumas" name="username" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1" required>
                    </div>
                    <br>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control input-pumas" name="password" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" required>
                    </div>
                    <br>
                    <br>
                    <div class="text-center">
                      <button type="submit" class="btn-pumas-login">Ingresar</button>
                    </div>
                    <br>
                    <div class="d-grid gap-2 text-center">
                      <a href="/secretaria.html" class="Link_reset-pass">Olvidó su contraseña?</a>
                    </div>
                    <br>
                  </form>
                </div>
              </div>
              <div class="col-sm-4"></div>
            </div>
          </div>
        </body>
      </html>
    `;
  }
}

customElements.define("my-element", MyElement);
