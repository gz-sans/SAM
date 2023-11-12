import { LitElement,html } from "lit-element";
import styleCssn from './my-elementStyle';
export class MyElement extends LitElement{
    static get styles(){
        return[styleCssn];
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
                <title></title>
        </head>        
        <body>
        <br>
        <br>
        <div class="container-fluid">
        <div class="row">
            <div class="col-sm">
            <div class=" text-center">
            <p class="fs-1"><b>NOSOTROS</b></p>
            </div>


            <div class="text-center">
            <img src="nosotros.png" style: width="600px" height="400px" > 
            </div>
            <br>
            <br>
            
            <div class="text-center">
            <p class="fs-1 "><b>VISIÓN</b></p>
            </div>
            <div class="text-center">
            <p class="fs-4 ">Aspiramos a ser reconocidos a nivel mundial por nuestro impacto en la vida de los 
            animales rescatados y en la sociedad en general. 
            Generamos conocimiento y conciencia sobre la importancia de la esterilización y 
            la responsabilidad de tener una mascota.</p>
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <div class="text-center">
            <img src="3.png" style: width="600px" height="450px" > 
            </div>


            </div>



            <div class="col-sm">
            <br>
            <br>
            <br>
            <br>
            <div class="text-center">
            <p class="fs-1 "><b>MISION</b></p>
            </div>
            <div class="text-center">
            <p class="fs-4 ">SAM es una organización sin fines de lucro que trabaja para promover la adopción
            responsable de animales, la conciencia sobre la esterilización y la recuperación de animales maltratados y abandonados.
             Su objetivo es enseñar, contribuir y brindar una vida digna a todos los perros y gatos que lo necesiten.</p>
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <div class="text-center">
            <img src="2.png" style: width="600px" height="400px" > 
            </div>
            <br>
            <br>
            <div class="text-center">
            <p class="fs-1 "><b>SIFRAS</b></p>
            </div>
            <div class="text-center">
            <p class="fs-5 ">Cifras al final de 2023:
            <br>

            Más de 1054 perros y gatos rescatados, recuperados, rehabilitados y entregados en adopción responsable.
            <br>
            <br>

            Más de 15.069 animalitos esterilizados, atendidos y ayudados.
            <br>
            <br>

            Más de 600 campañas educativas sobre tenencia responsable y sensibilización con comunidades, empresas y colegios.
        </p>
            </div>






            </div>
        </div>
    </div> 
    <br>
    <br>
    </body>
    </html>                         
   
    `;

    }
}
customElements.define('my-element',MyElement);