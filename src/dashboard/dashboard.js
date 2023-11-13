import { LitElement, html, css } from "lit-element";
import stylescss from './dashboardStyles'

class Dash extends LitElement {
  static get styles(){
      return [stylescss]
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
    window.location.href = '../perritos/index.html';
  }

  render() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
          <p class="h3">Mascotas</p>
          <form class="text-center" @submit="${this.redirect}">
                    <button type="submit" class="btn-danger-1">nosotros</button>
                    </form>
            <form class="text-center" @submit="${this.redirect2}">
            <button type="submit" class="btn-danger-1">adopta aqui</button>
            </form>
          <form class="d-flex" role="search">
              <button class="btn btn-outline-primary" type="submit" >Cerrar
                  sesion</button>
          </form>
      </div>
    </nav>
    <main>
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Adopta una mascota</h1>
                    <p class="lead text-body-secondary">algo corto y
                          líder sobre la colección a continuación: su contenido, el
                          creador, etc. Hazlo breve y conciso, pero no demasiado
                          breve para que la gente no se lo salte por completo.</p>
                    <p>
                        <a href="#" class="btn btn-primary my-2">Mostrar
                            disponibles</a>
                        <a href="#" class="btn btn-secondary my-2">Terminos
                            y condiciones</a>
                    </p>
                </div>
            </div>
        </section>

        <div class="album py-5 bg-body-tertiary">
            <div class="container">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col">
                        <div class="card shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVycm98ZW58MHx8MHx8fDA%3D"
                                class="img-fluid" alt="...">
                            <div class="card-body">
                                <p class="card-text">EvaXenPhone es un
                                    pitbull encontrado enfermo en la
                                    localidad de Suba. Ahora tiene 5 meses y
                                    esta fuerte y sano para ir a un buen
                                    hogar. Tal vez el tuyo.</p>
                                <div
                                    class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button"
                                            class="btn btn-sm btn-outline-secondary">Adoptar</button>
                                    </div>
                                    <small class="text-body-secondary">9
                                        mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVycm98ZW58MHx8MHx8fDA%3D"
                                class="img-fluid" alt="...">
                            <div class="card-body">
                                <p class="card-text">EvaXenPhone es un
                                    pitbull encontrado enfermo en la
                                    localidad de Suba. Ahora tiene 5 meses y
                                    esta fuerte y sano para ir a un buen
                                    hogar. Tal vez el tuyo.</p>
                                <div
                                    class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button"
                                            class="btn btn-sm btn-outline-secondary">Adoptar</button>
                                    </div>
                                    <small class="text-body-secondary">9
                                        mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVycm98ZW58MHx8MHx8fDA%3D"
                                class="img-fluid" alt="...">
                            <div class="card-body">
                                <p class="card-text">EvaXenPhone es un
                                    pitbull encontrado enfermo en la
                                    localidad de Suba. Ahora tiene 5 meses y
                                    esta fuerte y sano para ir a un buen
                                    hogar. Tal vez el tuyo.</p>
                                <div
                                    class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button"
                                            class="btn btn-sm btn-outline-secondary">Adoptar</button>
                                    </div>
                                    <small class="text-body-secondary">9
                                        mins</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVycm98ZW58MHx8MHx8fDA%3D"
                                class="img-fluid" alt="...">
                            <div class="card-body">
                                <p class="card-text">EvaXenPhone es un
                                    pitbull encontrado enfermo en la
                                    localidad de Suba. Ahora tiene 5 meses y
                                    esta fuerte y sano para ir a un buen
                                    hogar. Tal vez el tuyo.</p>
                                <div
                                    class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button"
                                            class="btn btn-sm btn-outline-secondary">Adoptar</button>
                                    </div>
                                    <small class="text-body-secondary">9
                                        mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVycm98ZW58MHx8MHx8fDA%3D"
                                class="img-fluid" alt="...">
                            <div class="card-body">
                                <p class="card-text">EvaXenPhone es un
                                    pitbull encontrado enfermo en la
                                    localidad de Suba. Ahora tiene 5 meses y
                                    esta fuerte y sano para ir a un buen
                                    hogar. Tal vez el tuyo.</p>
                                <div
                                    class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button"
                                            class="btn btn-sm btn-outline-secondary">Adoptar</button>
                                    </div>
                                    <small class="text-body-secondary">9
                                        mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVycm98ZW58MHx8MHx8fDA%3D"
                                class="img-fluid" alt="...">
                            <div class="card-body">
                                <p class="card-text">EvaXenPhone es un
                                    pitbull encontrado enfermo en la
                                    localidad de Suba. Ahora tiene 5 meses y
                                    esta fuerte y sano para ir a un buen
                                    hogar. Tal vez el tuyo.</p>
                                <div
                                    class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button"
                                            class="btn btn-sm btn-outline-secondary">Adoptar</button>
                                    </div>
                                    <small class="text-body-secondary">9
                                        mins</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVycm98ZW58MHx8MHx8fDA%3D"
                                class="img-fluid" alt="...">
                            <div class="card-body">
                                <p class="card-text">EvaXenPhone es un
                                    pitbull encontrado enfermo en la
                                    localidad de Suba. Ahora tiene 5 meses y
                                    esta fuerte y sano para ir a un buen
                                    hogar. Tal vez el tuyo.</p>
                                <div
                                    class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button"
                                            class="btn btn-sm btn-outline-secondary">Adoptar</button>
                                    </div>
                                    <small class="text-body-secondary">9
                                        mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVycm98ZW58MHx8MHx8fDA%3D"
                                class="img-fluid" alt="...">
                            <div class="card-body">
                                <p class="card-text">EvaXenPhone es un
                                    pitbull encontrado enfermo en la
                                    localidad de Suba. Ahora tiene 5 meses y
                                    esta fuerte y sano para ir a un buen
                                    hogar. Tal vez el tuyo.</p>
                                <div
                                    class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button"
                                            class="btn btn-sm btn-outline-secondary">Adoptar</button>
                                    </div>
                                    <small class="text-body-secondary">9
                                        mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVycm98ZW58MHx8MHx8fDA%3D"
                                class="img-fluid" alt="...">
                            <div class="card-body">
                                <p class="card-text">EvaXenPhone es un
                                    pitbull encontrado enfermo en la
                                    localidad de Suba. Ahora tiene 5 meses y
                                    esta fuerte y sano para ir a un buen
                                    hogar. Tal vez el tuyo.</p>
                                <div
                                    class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button"
                                            class="btn btn-sm btn-outline-secondary">Adoptar</button>
                                    </div>
                                    <small class="text-body-secondary">9
                                        mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
    <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"></script>
    `;
  }
}

customElements.define("my-dash", Dash);