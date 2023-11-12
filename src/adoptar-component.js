import { LitElement, html, css} from "lit-element";
import stylesAdcss from './adoptar-componentStyle'



export class Adoptar extends LitElement{

       static get styles() {
              return stylesAdcss;
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
                              <br>
      
                              <form>
                              <div class="input-group ">
                                  <input type="text" class="form-control"  placeholder="Nombre Mascota a adoptar" required="">
                              </div>
                              <br>
                              <div class="input-group ">
                                  <input type="text" class="form-control" placeholder="Nombre Adoptante" required="" >
                              </div>
                              <br>
                              <div class="input-group ">
                              <select class="form-control" aria-label="fault select exampleDe">
                              <option selected>Tipo de Animal</option>
                              <option value="1">Perro</option>
                              <option value="2">Gato</option>
       
                            </select> 
                            </select>                        </div>
                              <br>
                              <div class="input-group ">
                              <input type="text" class="form-control" placeholder="Numero de documento" required=" ">
                              </div>
                              <br>
                              <div class="input-group ">
                              <input type="text" class="form-control" placeholder="Dirección de residencia" required="" >
                              </div>
                              <br>
                              <div class="input-group ">
                              <input type="text" class="form-control" placeholder="Contacto" required="" >
                              </div>
                              <br>
                              <div class="input-group ">
                              <input type="text" class="form-control" placeholder="Numero de Integrantes en el hogar" required="" >
                              </div>
                              <br>
                              <div class="input-group ">
                              <input type="text" class="form-control" placeholder="Edad" required="" >
                              </div>
                              <br>
                              <div class="input-group ">
                              <input type="text" class="form-control" placeholder="Ciudad de Residencia" required="" >
                              </div>
                              <br>
                              <div class="input-group ">
                              <input type="text" class="form-control" placeholder="Barrio" required="" >
                              </div>
                              <br>
                              <br>
                                  <div class="text-center">
                                      <button type="submit" class="btn-danger-1">Adoptar</button> 
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
          <br>
          <br>        
          </body>
              </html>
              `;
              
       }

     
}

      customElements.define('adoptar-component',Adoptar);