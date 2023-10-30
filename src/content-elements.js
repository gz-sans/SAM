import { html, css, LitElement } from 'lit-element';
import stylescss from './my-elementStyle'

class ContentElements extends LitElement {
  static get styles(){
    return [stylescss]
 }

  render() {
    return html`
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/f31778972e.js" crossorigin="anonymous"></script> 
    <title>SITS</title>
</head>

<body>
<div class="col-sm-9">
                <div class="row">
                    <div class="col-sm">
                        <div class="card box-sombra" style="width: 70%;margin-left: 30px;">
                            <div class="card-body">
                                <div class="text-center">
                                    <div class="row">
                                        <div class="col-sm">

                                        </div>
                                        <div class="col-sm">
                                            <h5 class="text-cat-scret">Actas</h5>
                                            <hr style="width: 100%;">
                                        </div>
                                        <div class="col-sm">

                                        </div>
                                    </div>
                                    <img src="../resources/img/iconoCategoSecret.png" class="imagen-cat-secret">
                                </div>
                                <br>
                                <div class="text-center">
                                    <form action="listaActas.php">
                                        <button type="submit" class="btn-pumas-solicitudes-dos">Gestionar</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card box-sombra" style="width: 70%;margin-left: 30px;">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm">

                                    </div>
                                    <div class="col-sm">
                                        <h5 class="text-cat-scret">Certificaciones</h5>
                                        <hr style="width: 100%;">
                                    </div>
                                    <div class="col-sm">

                                    </div>
                                </div>
                                <div class="text-center">
                                    <img src="../resources/img/iconoCatSecretCert.png" class="imagen-cat-secret-dos">
                                </div>
                                <br>
                                <div class="text-center">
                                    <form action="./listaCertificados.php">
                                        <button type="submit" class="btn-pumas-solicitudes-dos">Gestionar</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card box-sombra" style="width: 70%;margin-left: 30px;">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm">

                                    </div>
                                    <div class="col-sm">
                                        <h5 class="text-cat-scret">Reuniones</h5>
                                        <hr style="width: 100%;">
                                    </div>
                                    <div class="col-sm">

                                    </div>
                                </div>
                                <div class="text-center">
                                    <img src="../resources/img/iconReuniones.png" class="imagen-cat-secret-tres">
                                </div>
                                <br>
                                <form action="./listaReuniones.php">
                                    <button type="submit" class="btn-pumas-solicitudes-dos">Gestionar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-sm">
                        <div class="card box-sombra" style="width: 70%;margin-left: 30px;">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm">

                                    </div>
                                    <div class="col-sm">
                                        <h5 class="text-cat-scret">Asistencia</h5>
                                        <hr style="width: 100%;">
                                    </div>
                                    <div class="col-sm">

                                    </div>
                                </div>
                                <div class="text-center">
                                    <img src="../resources/img/iconoReuniones.png" class="imagen-cat-secret-tres">
                                </div>
                                <br>
                                <div class="text-center">
                                    <form action="./listaAsistencia.php">
                                        <button type="submit" class="btn-pumas-solicitudes-dos">Gestionar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card box-sombra" style="width: 70%;margin-left: 30px;">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm">

                                    </div>
                                    <div class="col-sm">
                                        <h5 class="text-cat-scret">Comunicación</h5>
                                        <hr style="width: 100%;">
                                    </div>
                                    <div class="col-sm">

                                    </div>
                                </div>
                                <div class="text-center">
                                    <img src="../resources/img/iconoComunicacion.png" class="imagen-cat-secret-tres">
                                </div>
                                <br>
                                <div class="text-center">
                                    <form action="./comunicacion.php">
                                        <button type="submit"
                                            class="btn-pumas-solicitudes-dos">Gestionar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card box-sombra" style="width: 70%;margin-left: 30px;">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm">

                                    </div>
                                    <div class="col-sm">
                                        <h5 class="text-cat-scret">Cuentas</h5>
                                        <hr style="width: 100%;">
                                    </div>
                                    <div class="col-sm">

                                    </div>
                                </div>
                                <div class="text-center">
                                    <img src="../resources/img/iconoComunicacion.png" class="imagen-cat-secret-tres">
                                </div>
                                <br>
                                <div class="text-center">
                                    <button disabled
                                        class="btn-pumas-solicitudes-dos">Gestionar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
            </div>
        </div>
    </div>
  </body>
    `;
  }
}

customElements.define('content-elements', ContentElements);
