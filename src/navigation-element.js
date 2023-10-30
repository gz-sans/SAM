import { html, css, LitElement } from "lit-element";
import stylescss from "./my-elementStyle";

class NavigationElement extends LitElement {
  static get styles() {
    return [stylescss];
  }

  render() {
    return html`
         <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="module" src="src/content-elements.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
<script src="https://kit.fontawesome.com/f31778972e.js" crossorigin="anonymous"></script>    <link rel="stylesheet" href="../Css/index.css">
    <title>SITS</title>
</head>

<body class="no-background">
    <br>
    <br>
    <br>
    <br>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3">
                <div class="card box-sombra card-menu">
    <ul style="padding-left: 1px;">
        <li class="option-menu">
            <a href="Dashboard.php" class="link-buttom">
                <img src="../resources\img\iconoBalon.png" alt="" class="img-list-link">
                <span class="text-list-font">Inicio</span>
            </a>
        </li>
        <li class="option-menu">
            <a href="Formulario.php" class="link-buttom">
                <img src="../resources\img\iconoBalon.png" alt="" class="img-list-link">
                <span class="text-list-font">Presidencia</span>
                
            </a>
        </li>
        <li class="option-menu">
            <a href="Formulario.php" class="link-buttom">
                <img src="../resources\img\iconoBalon.png" alt="" class="img-list-link">
                <span class="text-list-font">Vice Presidencia</span>
                
            </a>
        </li>
        <li class="option-menu">
            <a href="Secretariado.php" class="link-buttom">
                <img src="../resources\img\iconoBalon.png" alt="" class="img-list-link">
                <span class="text-list-font">Secretaria</span>
                
            </a>
        </li>
        <li class="option-menu">
            <a href="Tesoreria.php" class="link-buttom">
                <img src="../resources\img\iconoBalon.png" alt="" class="img-list-link">
                <span class="text-list-font">Tesoreria</span>
            </a>
            
        </li>
        <li class="option-menu">
            <a href="Revisor.php" class="link-buttom">
                <img src="../resources\img\iconoBalon.png" alt="" class="img-list-link">
                <span class="text-list-font">Revisoria Fiscal</span>
            </a>
            
        </li>
        <li class="option-menu">
            <a href="listaAfiliados.php" class="link-buttom">
                <img src="../resources\img\iconoBalon.png" alt="" class="img-list-link">
                <span class="text-list-font">Lista afiliados</span>
                
            </a>
        </li>
        <li class="option-menu">
            <a href="listaJugadores.php" class="link-buttom">
                <img src="../resources\img\iconoBalon.png" alt="" class="img-list-link">
                <span class="text-list-font">Lista de Jugadores</span>
            </a>
            
        <li class="option-menu">
            <a href="listaCoachs.php" class="link-buttom">
                <img src="../resources\img\iconoBalon.png" alt="" class="img-list-link">
                <span class="text-list-font">Lista de Coach's</span>
                
            </a>
        </li>
        <li class="option-menu">
            <a href="listaMaterial.php" class="link-buttom">
                <img src="../resources\img\iconoBalon.png" alt="" class="img-list-link">
                <span class="text-list-font">Lista Material</span>
            </a>
            
        </li>
        <li class="option-menu">
            <img src="../resources\img\iconoBalon.png" alt="" class="img-list-link">
            <span class="text-list-font">Lista Asistencia</span>
            
        </li>
        <li class="option-menu">
            <img src="../resources\img\iconoBalon.png" alt="" class="img-list-link">
            <span class="text-list-font">Cronograma</span>
            
        </li>
        <li class="option-menu">
            <img src="../resources\img\iconoBalon.png" alt="" class="img-list-link">
            <span class="text-list-font">Varios</span>
            
        </li>
        
    </ul>

</div>            
</div>
<content-elements></content-elements>

            
</body>

</html>

    `;
  }
}

customElements.define("navigation-element", NavigationElement);
