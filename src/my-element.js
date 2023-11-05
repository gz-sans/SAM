import { LitElement, html, css } from "lit-element";
import stylescss from './my-elementStyle'

class MyElement extends LitElement {
  static get styles(){
      return [stylescss]
   }

  render() {
    return html`
    <!-- contenido  -->
      
    `;
  }
}

customElements.define("my-element", MyElement);
