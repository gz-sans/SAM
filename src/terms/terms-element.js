import { LitElement,html } from "lit-element";



class TermsAndConditions extends LitElement {
  constructor() {
    super();
    this.organizationName = '[Nombre de la Organización]';
    this.country = '[País]';
    this.city = '[Ciudad]';
    this.contactInfo = '[información de contacto]';
  }

  static styles = css`
    :host {
      display: block;
      color: white;
      background-color: purple;
      padding: 20px;
    }


    h2 {
      color: purple;
    }

    h3 {
      color: white;
    }

    p {
      margin: 10px 0;
    }
  `;

  render() {
    return html`
      <h2>Términos y Condiciones para la Adopción de Mascotas</h2>

      <h3>Introducción</h3>
      <p>1.1 Este sitio web ("Sitio") es operado por ${this.organizationName} ("Nosotros", "Nuestra"). Al utilizar este Sitio, usted acepta cumplir con los términos y condiciones establecidos en este documento.</p>

      <h3>Elegibilidad</h3>
      <p>2.1 Para adoptar una mascota a través de este Sitio, debe tener al menos 18 años de edad o contar con el consentimiento de un adulto.</p>
      <p>2.2 Al ofrecer una mascota en adopción, usted debe ser el dueño legal de la mascota o contar con el consentimiento del dueño legal.</p>

      <h3>Información de la Mascota</h3>
      <p>3.1 Nos esforzamos por proporcionar información precisa sobre las mascotas en adopción, pero no podemos garantizar la exactitud de la información.</p>
      <p>3.2 Los usuarios son responsables de verificar la información y realizar una evaluación personal de la mascota antes de la adopción.</p>

      <h3>Proceso de Adopción</h3>
      <p>4.1 Al solicitar la adopción de una mascota, usted acepta proporcionar información veraz y completa.</p>
      <p>4.2 La adopción de una mascota está sujeta a la aprobación por parte del dueño de la mascota o la organización de adopción.</p>
      <p>4.3 Al aceptar la adopción, usted asume la responsabilidad de cuidar y proporcionar un hogar adecuado a la mascota.</p>

      <h3>Responsabilidades del Adoptante</h3>
      <p>5.1 Como adoptante, se compromete a proporcionar atención, alimentación, refugio y atención médica adecuada a la mascota.</p>
      <p>5.2 Entiende que la adopción es un compromiso a largo plazo y se compromete a cuidar de la mascota durante toda su vida.</p>

      <h3>Responsabilidades del Ofrecedor de Mascotas</h3>
      <p>6.1 Como ofrecedor de una mascota en adopción, se compromete a proporcionar información precisa sobre la mascota.</p>
      <p>6.2 Acepta que la organización de adopción o el adoptante puedan realizar una evaluación previa a la adopción.</p>

      <h3>Tarifas y Donaciones</h3>
      <p>7.1 Algunas organizaciones de adopción pueden cobrar tarifas o solicitar donaciones para cubrir los gastos relacionados con la adopción. Estas tarifas deben ser transparentes y se indicarán claramente.</p>

      <h3>Política de Privacidad</h3>
      <p>8.1 Respetamos su privacidad. Consulte nuestra Política de Privacidad para obtener más información sobre cómo manejamos sus datos personales.</p>

      <h3>Cancelación de Adopción</h3>
      <p>9.1 Las adopciones pueden ser canceladas por razones justificadas, pero se deben seguir los procedimientos establecidos por la organización de adopción.</p>

      <h3>Ley Aplicable</h3>
      <p>10.1 Estos términos y condiciones se rigen por las leyes del ${this.country} y cualquier disputa se resolverá en los tribunales de ${this.city}.</p>

      <h3>Cambios en los Términos</h3>
      <p>11.1 Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán efectivos a partir de la fecha de su publicación en el Sitio.</p>

      <h3>Contacto</h3>
      <p>12.1 Para cualquier pregunta o inquietud relacionada con estos términos y condiciones, contáctenos a través de ${this.contactInfo}.</p>
    `;
  }
}

customElements.define('terms-elements', TermsAndConditions);
