import { LitElement, html } from "lit-element";
import stylesLocss from "./login-componentStyle";

export class LoginComponent extends LitElement {
  registrate(event) {
    event.preventDefault();
    window.location.href = "src/register/register.html";
  }

  registros(event) {
    event.preventDefault();

    // Obtiene los valores ingresados por el usuario
    const username = this.shadowRoot.querySelector(".input_user").value;
    const password = this.shadowRoot.querySelector(".input_pass").value;

    // Verifica si los datos coinciden (datos quemados)
    if (username === "usuario" && password === "contraseña") {
      // Redirige a la página de dashboard si el inicio de sesión es exitoso
      window.location.href = "../../src/perritos2/index.html";
    } else if (username === "gz sans" && password === "1234") {
      window.location.href = "../../src/perritos2/index.html";
    } else if (username === "secret" && password === "1234") {
      window.location.href = "../../src/perritos2/index.html";
    } else {
      alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  }

  render() {
    return html`
      <html>
        <head>
          <title>My Awesome Login Page</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
            integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
            crossorigin="anonymous"
          />
        </head>
        <body>
          <div class="container h-100">
            <div class="d-flex justify-content-center h-100">
              <div class="user_card">
                <div class="d-flex justify-content-center">
                  <div class="brand_logo_container">
                    <img
                      src="./resources/logo.png"
                      class="brand_logo"
                      alt="Logo"
                    />
                  </div>
                </div>
                <div class="d-flex justify-content-center form_container">
                  <form class="text-center" @submit="${this.registros}">
                    <div class="input-group mb-3">
                      <div class="input-group-append">
                        <span class="input-group-text"
                          ><i class="fas fa-user"></i
                        ></span>
                      </div>
                      <input
                        type="text"
                        name=""
                        class="form-control input_user"
                        value=""
                        placeholder="username"
                      />
                    </div>
                    <div class="input-group mb-2">
                      <div class="input-group-append">
                        <span class="input-group-text"
                          ><i class="fas fa-key"></i
                        ></span>
                      </div>
                      <input
                        type="password"
                        name=""
                        class="form-control input_pass"
                        value=""
                        placeholder="password"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customControlInline"
                        />
                        <label
                          class="custom-control-label"
                          for="customControlInline"
                          >Remember me</label
                        >
                      </div>
                    </div>
                    <div
                      class="d-flex justify-content-center mt-3 login_container">
                      <button type="submit" name="button" class="btn login_btn">
                        Login
                      </button>
                    </div>
                  </form>
                </div>

                <div class="mt-4">
                  <form class="text-center" @submit="${this.registrate}">
                    <button type="submit" class="btn btn-danger-1">
                      Registrate
                    </button>
                  </form>
                  <div class="d-flex justify-content-center links">
                    <a href="#">Forgot your password?</a>
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
    return stylesLocss;
  }
}

customElements.define("login-component", LoginComponent);
