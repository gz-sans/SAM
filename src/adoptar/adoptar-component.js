import { LitElement, html, css } from "lit-element";
import stylesAdcss from "./adoptar-componentStyle";

export class Adoptar extends LitElement {
  static get styles() {
    return stylesAdcss;
  }

  constructor() {
    super();
    this.dialogMessage = "";
    this.nombreMascota = localStorage.getItem("nombreMascota") || "";
    this.nombreAdoptante = localStorage.getItem("nombreAdoptante") || "";
    this.tipoAnimal = localStorage.getItem("tipoAnimal") || "";
    this.numeroDocumento = localStorage.getItem("numeroDocumento") || "";
    this.direccionResidencia =
      localStorage.getItem("direccionResidencia") || "";
    this.contacto = localStorage.getItem("contacto") || "";
    this.numIntegrantesHogar =
      localStorage.getItem("numIntegrantesHogar") || "";
    this.edad = localStorage.getItem("edad") || "";
    this.ciudadResidencia = localStorage.getItem("ciudadResidencia") || "";
    this.barrio = localStorage.getItem("barrio") || "";
  }

  handleSubmit() {
    this.nombreMascota = this.shadowRoot.querySelector("#nombreMascota").value;
    this.nombreAdoptante =
      this.shadowRoot.querySelector("#nombreAdoptante").value;
    this.tipoAnimal = this.shadowRoot.querySelector("#tipoAnimal").value;
    this.numeroDocumento =
      this.shadowRoot.querySelector("#numeroDocumento").value;
    this.direccionResidencia = this.shadowRoot.querySelector(
      "#direccionResidencia"
    ).value;
    this.contacto = this.shadowRoot.querySelector("#contacto").value;
    this.numIntegrantesHogar = this.shadowRoot.querySelector(
      "#numIntegrantesHogar"
    ).value;
    this.edad = this.shadowRoot.querySelector("#edad").value;
    this.ciudadResidencia =
      this.shadowRoot.querySelector("#ciudadResidencia").value;
    this.barrio = this.shadowRoot.querySelector("#barrio").value;

    let data = {
      nombre: this.nombreMascota,
      nombreAdop: this.nombreAdoptante,
      tipoA: this.tipoAnimal,
      numeroDoc: this.numeroDocumento,
      direccionResi: this.direccionResidencia,
      contac: this.contacto,
      integrantes: this.numIntegrantesHogar,
      edad: this.edad,
      ciudad: this.ciudadResidencia,
      barrio: this.barrio,
    };

    console.log(data);

    localStorage.setItem("mascota", JSON.stringify(data));
    this.dialogMessage = "Los datos se han guardado correctamente.";
  }

  closeDialog() {
    this.dialogMessage = "";
  }
  render() {
    return html`
      <html lang="en">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://code.jquery.com/jquery-3.6.3.js"
          integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://kit.fontawesome.com/f31778972e.js"
          crossorigin="anonymous"
        ></script>
        <body>
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm"></div>
              <div class="col-sm">
                <div class="card">
                  <div class="card-header bg-danger-1">
                    <div class="text-center">
                      <h3>
                        <b>Formulario De Adopcion</b>
                      </h3>
                    </div>
                  </div>
                  <div class="card-body">
                    <br />
                    
                      <div class="input-group ">
                        <input
                          name="nombreMascota"
                          id="nombreMascota"
                          type="text"
                          class="form-control"
                          placeholder="Nombre Mascota a adoptar"
                          value="${this.nombreMascota}"
                          required
                        />
                      </div>
                      <br />
                      <div class="input-group ">
                        <input
                          id="nombreAdoptante"
                          type="text"
                          class="form-control"
                          placeholder="Nombre Adoptante"
                          value="${this.nombreAdoptante}"
                          required
                        />
                      </div>
                      <br />
                      <div class="input-group">
                        <select
                          id="tipoAnimal"
                          class="form-control"
                          aria-label="Tipo de Animal"
                        >
                          <option selected>Tipo de Animal</option>
                          <option value="Perro">Perro</option>
                          <option value="Gato">Gato</option>
                        </select>
                      </div>
                      <br />
                      <div class="input-group">
                        <input
                          id="numeroDocumento"
                          type="text"
                          class="form-control"
                          placeholder="Numero de documento"
                          required
                        />
                      </div>
                      <br />
                      <div class="input-group">
                        <input
                          id="direccionResidencia"
                          type="text"
                          class="form-control"
                          placeholder="Dirección de residencia"
                          required
                        />
                      </div>

                      <br />
                      <div class="input-group">
                        <input
                          id="contacto"
                          type="text"
                          class="form-control"
                          placeholder="Contacto"
                          required
                        />
                      </div>
                      <br />
                      <div class="input-group">
                        <input
                          id="numIntegrantesHogar"
                          type="text"
                          class="form-control"
                          placeholder="Numero de Integrantes en el hogar"
                          required
                        />
                      </div>
                      <br />
                      <div class="input-group">
                        <input
                          id="edad"
                          type="text"
                          class="form-control"
                          placeholder="Edad"
                          required
                        />
                      </div>
                      <br />
                      <div class="input-group">
                        <input
                          id="ciudadResidencia"
                          type="text"
                          class="form-control"
                          placeholder="Ciudad de Residencia"
                          required
                        />
                      </div>
                      <br />
                      <div class="input-group">
                        <input
                          id="barrio"
                          type="text"
                          class="form-control"
                          placeholder="Barrio"
                          required
                        />
                      </div>
                      <br />
                      <div class="text-center">
                        <button
                          @click="${(e) => 
                            this.handleSubmit()
                          }"
                          class="btn-danger-1"
                        >
                          Adoptar
                        </button>
                      </div>
                      <br />
                      <div></div>
                      <br />
                  </div>
                </div>
              </div>
              <div class="col-sm"></div>
            </div>
          </div>
          <br />
          <br />
          <!-- Cuadro de diálogo -->
          ${this.dialogMessage
            ? html`
                <div class="dialog-overlay">
                  <div class="dialog-box">
                    <p>${this.dialogMessage}</p>
                    <button @click="${this.closeDialog}">Cerrar</button>
                  </div>
                </div>
              `
            : ""}
        </body>
      </html>
    `;
  }
}

customElements.define("adoptar-component", Adoptar);
