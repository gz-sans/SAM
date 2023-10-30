import { css } from "lit-element";
export default css `
body {
    background-color: #fff;
    background-image: url('../resources/img/Recurso 1.png');
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    height: 100vh;
}
.continer{
    width: 400px; /* Ancho del cuadro */
    height: 200px; /* Alto del cuadro */
    margin: 0 auto; /* Centra horizontalmente */
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center; /* Centra el contenido */
    padding: 20px; /* Añade relleno según tus necesidades */
    box-sizing: border-box; /* Para que el relleno se incluya en el ancho total */
}
/* .continer{
    width: 100%;
    height: 80px;
    justify-content: center;
    align-items: center;
    display: flex;
}  */

.no-background {
    background-image: none;
    ;
}

.perfil-menu {
    background-color: #FF0000;
    border-radius: 0px 0px 42px 0px;
    width: 30%;
    height: 80px;
}

.row-user {
    background-color: white;
    width: 86%;
    margin-top: 23px;
    margin-left: 21px;
    border-radius: 33px 0px 37px 33px;
}

.navbar {
    padding: 0PX !IMPORTANT;
}

.logo-index-login {
    display: none;
}

.bg-red-pumas {
    background-color: #FF0000;
    font-family: RobotoBold;
    color: #fff;
}

.input-pumas {
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 0.5px solid #FF0000;
    border-radius: 0px;
   
}

.btn-pumas-login {
    background-color: #FF0000;
    border-radius: 12px;
    border: 0px;
    height: 40px;
    width: 40%;
    text-transform: uppercase;
    color: white;
}

.btn-new-acta{
    background-color: #FF0000;
    border-radius: 12px;
    border: 0px;
    height: 40px;
    width: 40%;
    text-transform: uppercase;
    color: white;
}

.btn-new-reu{
    background-color: #FF0000;
    border-radius: 12px;
    border: 0px;
    height: 40px;
    width: 100%;
    text-transform: uppercase;
    color: white;
}

.Link_reset-pass {
    color: #4C4C4C;
    font-family: RobotoBold;
}

.card-box {
    margin-top: 100px;
    box-shadow: 4px 5px 7px 1px rgb(0 0 0 / 60%);
}

.card-login {
    margin: 20px;
}

.image-user {
    width: 200px;
    height: 130px;
}

.img-style-logo {
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50px;
    margin: -17px;
}

.img-user-log {
    width: 30px;
    height: 30px;
}

.bg-silver {
    background-color: #ffffff;
    padding: 10px;
    width: 200px;
    border-radius: 50px;
}

.bg-silver-color {
    background-color: #ffffff;
    border-radius: 12px;
    height: 60px;
    font-family: 'SansSerifBookFLF';
    font-weight: bold;
}

.margin {
    margin-left: 8px;
    margin-top: 3px;
    font-size: 1rem;
    color: #4C4C4C;
    text-decoration: auto;
    font-weight: bold;
    font-family: 'RobotoBold';
}

.img-list-link {
    margin-right: 12px;
}

.link-buttom {
    text-decoration: none;
    color: #4C4C4C;
    font-family: RobotoBold !important;
    font-style: normal;
}

.card-menu {
    border-radius: 12px;
    background-color: #BCBCBC;
}

.imagen-icono-presi {
    width: 40px;
    height: 40px;
    margin-left: 17px;
    margin-top: 13px;
}

.imagen-icono-presi-row {
    width: 15px;
    height: 20px;
    margin-left: 10px;
    margin-top: 28px;
}

.card-presi-row-acti {
    max-width: 540px;
    cursor: pointer;
    box-shadow: 4px 5px 7px 1px rgb(0 0 0 / 60%);
}

.text-card-presel {
    font-family: RobotoBold;
    font-size: 1rem;
}

.hr-title {
    margin-top: 0px;
}

.user-decorator {
    margin-left: 40px;
    padding: 0px;
    margin-bottom: 0px;
    font-size: 10px;
    text-indent: 4px;
    line-height: 0px;
}

.btn-pumas-solicitudes {
    background-color: #FF0000;
    border-radius: 12px;
    border: 0px;
    height: 40px;
    width: 100%;
    text-transform: uppercase;
    color: white;
}

.btn-pumas-solicitudes-dos {
    background-color: #FF0000;
    border-radius: 12px;
    border: none;
    width: 100% !important;
    text-transform: uppercase;
    color: white;
}

.box-sombra {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.527);
}

.label-menu {
    margin: 12px;
    font-family: 'SansSerifBookFLF';
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
}

.option-menu {
    margin: 12px;
    list-style-type: none;
    border: solid 0.5px #dadada;
    border-radius: 6px;
    background-color: #fff;
    padding: 7px;
}

.margin-icono {
    margin: 12px;
}

.size-icono {
    font-size: 25px;
}

.size-icono-home {
    font-size: 16px;
}

.size-icono-form {
    font-size: 16px;
}

.size-icono-arrow {
    font-size: 20px;
}



.right-arrow {
    margin-left: 136px;
}

.right-arrow-formato {
    margin-left: 73px;
}

.right-arrow-list {
    margin-left: 73px;
}

.right-arrow-estadist {
    margin-left: 79px;
}

.right-arrow-logout {
    margin-left: 145px;
}

.margin-col {
    margin: 12px;

}

.padding {
    padding: 14px;
    width: 202px;
}

.padding-label {
    padding: 14px;
    width: 202px;
}


.title-datos {
    font-family: 'SansSerifBookFLF';
    font-weight: bold;
}

.margin-full {
    margin: 15px;
}

.card-padding {
    padding: 20px;
}

.input-form {
    width: 40%;
    border-radius: 6px;
    border: none;
    font-size: 11px;
    height: 30px;
    margin-left: 6px;
}

.message {
    margin-top: 200px;
    margin-bottom: 200px;
}

.title-list {
    font-family: 'SansSerifBookFLF';
    font-weight: bold;
    text-decoration: underline;
}

.boton-action {
    width: 60px;
    height: 60px;
    background-color: silver;
}

.style-message {
    border-radius: 12px;
    padding: 6px;
}

.title-Data {
    font-style: italic;
    font-family: 'SansSerifBookFLF';
    font-weight: bold;
    text-decoration: underline;
}

.link-hover:hover {

    color: white;
}

.inputFormUser {
    width: 154px;
    border-radius: 6px;
    border: solid 0.5px silver;
}

.labelFormUser {
    font-family: 'SansSerifBookFLF';
    font-size: 14px;
    font-style: italic;
}

.text-style {
    font-family: 'SansSerifBookFLF';
    font-size: 13px;
}

.inputFormUser-long {
    width: 100%;
    border-radius: 6px;
    border: solid 0.5px silver;
}

.spin-new {
    font-size: 47px;
    margin-top: 20px;

}

.margin-spin {
    margin-top: 120px;
}

.spin-size {
    width: 70px;
    height: 70px;
}

.text-style-spin {
    font-family: 'SansSerifBookFLF';
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
    margin-top: 15px;
}

.color-header {
    background-color: #867CA2;
}

.color-message {
    background-color: #DA8711;
}

.text-font {
    font-family: 'SansSerifBookFLF';
}

.text-small {
    font-family: 'SansSerifBookFLF';
    font-size: 12px;
    line-height: 0.5px;
}

.fondo-login {
    background-image: url('../resources/img/bg-02.jpg');

    height: 115px;
    background-repeat: no-repeat;
    background-size: cover;
}

.login100-form-title {
    width: 100%;
    position: relative;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    padding: 70px 15px 74px 15px;
}



/*
  estilos campo dorulario de venta
*/
.style-input-text {
    margin-left: 12px;
    font-family: 'SansSerifBookFLF';
}

.input-form-venta {
    width: 100%;
    border-radius: 6px;
    border: none;
}

.padding-form-venta {
    padding: 6px;
}

.strong {
    font-weight: bold;
}

.input-total-style {
    height: 90px;
    background-color: #E2E2E2;
}

.valor-total {
    margin: 12px;
    font-family: 'SansSerifBookFLF';
    font-size: 50px;
}

.check-form {
    border: solid 0.5px silver;
}

.input-text {
    border-left: 0px;
    border-right: 0px;
    border-top: 1px;
    border-bottom: solid silver;
    border-radius: 0px;
    margin-bottom: 12px;
}

.textArea {
    resize: none;
    height: 120px
}

.email_add {
    margin: 3px;
}

.text-cat-scret {
    font-family: RobotoBold;

}

.imagen-cat-secret {
    width: 75px;
    height: 80px;
}

.imagen-cat-secret-dos {
    width: 60px;
    height: 80px;
}

.imagen-cat-secret-tres{
    width: 79px;
    height: 79px;
}

.imagen-cat-secret-cuatro{
    width: 70px;
    height: 80px;
}

.title-Actas{
    font-family: RobotoBold;
}

.title-Actas-success{
    font-family: RobotoBold;
    font-size: 60px;
    color: #0cc50c;
}
.text-body-actas{
    font-family: RobotoLigth;
}

.title-form-detail-acta{
    font-family: RobotoBold;
}


@media (max-width: 600px) {
    body {
        background-color: #fff;
        background-image: none;
        background-size: cover;
        background-repeat: no-repeat;
        margin: 0;
        height: 100vh;
    }

    .logo-index-login {
        display: block;
        width: 170px;
        height: 170px;
        margin-top: 30px;
        margin-left: 77px;
        margin-bottom: -75px;
    }

}

@font-face {
    font-family: 'SansSerifLight';
    src: url('../resources/fuentes/sans-serif/SansSerifExbFLF.otf'),
        url('../resources/fuentes/sans-serif/SansSerifBldFLF-Italic.otf');
}

@font-face {
    font-family: 'SansSerifBookFLF';
    src: url('../resources/fuentes/sans-serif/SansSerifFLF-Italic.otf'),
        url('../resources/fuentes/sans-serif/SansSerifBldFLF-Italic.otf');
}

@font-face {
    font-family: 'RobotoLigth';
    src: url('../resources/fuentes/roboto/Roboto-Light.ttf'),
        url('../resources/fuentes/roboto/Roboto-Light.ttf');
}

@font-face {
    font-family: 'RobotoBold';
    src: url('../resources/fuentes/roboto/Roboto-Bold.ttf'),
        url('../resources/fuentes/roboto/Roboto-Bold.ttf');
}
`