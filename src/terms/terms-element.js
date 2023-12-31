import { LitElement,html } from "lit-element";
import stylescss from "./terms-style";


class TermsAndConditions extends LitElement {
  constructor() {
    super();
    this.organizationName = '[Nombre de la Organización]';
    this.country = '[País]';
    this.city = '[Ciudad]';
    this.contactInfo = '[información de contacto]';
  }
  static get styles() {
    return [stylescss];
  }
  render() {
    return html`
    <body>
    <a class="salir-button" href="../../index.html" onclick="window.close()">Salir</a>
    <h1>Contrato de Adopción de Mascotas</h1>

    <h2>Introducción</h2>
    <p>1.1 Este contrato de adopción de mascotas ("Contrato") es celebrado entre [Nombre de la Organización] ("Nosotros", "Nuestra") y el adoptante de la mascota ("Usted"). Al aceptar los términos de este Contrato, Usted se compromete a cumplir con las siguientes condiciones.</p>

    <h2>Elegibilidad</h2>
    <p>2.1 Para ser elegible para adoptar una mascota a través de este Contrato, Usted debe tener al menos 18 años de edad o contar con el consentimiento de un adulto.</p>
    <p>2.2 Al ofrecer una mascota en adopción, Usted declara ser el dueño legal de la mascota o contar con el consentimiento del dueño legal.</p>

    <h2>Información de la Mascota</h2>
    <p>3.1 Nos esforzamos por proporcionar información precisa sobre las mascotas en adopción, pero no podemos garantizar la exactitud de la información.</p>
    <p>3.2 Usted es responsable de verificar la información y realizar una evaluación personal de la mascota antes de la adopción.</p>

    <h2>Proceso de Adopción</h2>
    <p>4.1 Al solicitar la adopción de una mascota, Usted acepta proporcionar información veraz y completa.</p>
    <p>4.2 La adopción de una mascota está sujeta a la aprobación por parte del dueño de la mascota o la organización de adopción.</p>
    <p>4.3 Al aceptar la adopción, Usted asume la responsabilidad de cuidar y proporcionar un hogar adecuado a la mascota.</p>

    <h2>Responsabilidades del Adoptante</h2>
    <p>5.1 Como adoptante, Usted se compromete a proporcionar atención, alimentación, refugio y atención médica adecuada a la mascota.</p>
    <p>5.2 Usted entiende que la adopción es un compromiso a largo plazo y se compromete a cuidar de la mascota durante toda su vida.</p>

    <h2>Responsabilidades del Ofrecedor de Mascotas</h2>
    <p>6.1 Como ofrecedor de una mascota en adopción, Usted se compromete a proporcionar información precisa sobre la mascota.</p>
    <p>6.2 Usted acepta que la organización de adopción o el adoptante pueden realizar una evaluación previa a la adopción.</p>

    <h2>Tarifas y Donaciones</h2>
    <p>7.1 Algunas organizaciones de adopción pueden cobrar tarifas o solicitar donaciones para cubrir los gastos relacionados con la adopción. Estas tarifas deben ser transparentes y se indicarán claramente.</p>

    <h2>Política de Privacidad</h2>
    <p>8.1 Respetamos su privacidad. Consulte nuestra Política de Privacidad para obtener más información sobre cómo manejamos sus datos personales.</p>

    <h2>Cancelación de Adopción</h2>
    <p>9.1 Las adopciones pueden ser canceladas por razones justificadas, pero se deben seguir los procedimientos establecidos por la organización de adopción.</p>

    <h2>Ley Aplicable</h2>
    <p>10.1 Este Contrato se rige por las leyes del [País] y cualquier disputa se resolverá en los tribunales de [Ciudad].</p>

    <h2>Cambios en los Términos</h2>
    <p>11.1 Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán efectivos a partir de la fecha de su publicación en el Sitio.</p>

    <h2>Contacto</h2>
    <p>12.1 Para cualquier pregunta o inquietud relacionada con este Contrato, contáctenos a través de [información de contacto].</p>

    <h2>Política de Privacidad</h2>
    <p>8.1 Recopilación de Información Personal: Entendemos la importancia de la privacidad de nuestros usuarios. Al utilizar nuestro Sitio, es posible que recopilemos cierta información personal, que incluye, pero no se limita a, su nombre, dirección de correo electrónico, número de teléfono y otra información relevante relacionada con la adopción de mascotas.</p>
    <p>8.2 Uso de la Información Personal: La información personal que recopilamos se utiliza exclusivamente con el propósito de facilitar el proceso de adopción y mejorar nuestros servicios. No compartiremos, venderemos ni divulgaremos su información personal a terceros sin su consentimiento expreso.</p>
    <p>8.3 Cookies y Tecnologías Similares: Podemos utilizar cookies y otras tecnologías de seguimiento para mejorar su experiencia en nuestro Sitio. Estas tecnologías nos permiten recopilar datos no identificables personalmente, como patrones de navegación y preferencias del usuario. Puede configurar su navegador para bloquear estas cookies si lo prefiere.</p>
    <p>8.4 Terceros: Es posible que trabajemos con terceros, como proveedores de servicios de pago y procesadores de pagos, que pueden tener acceso a su información personal para facilitar transacciones y adopciones. Estos terceros están obligados a cumplir con las leyes de protección de datos aplicables.</p>
    <p>8.5 Seguridad de los Datos: Tomamos medidas de seguridad para proteger su información personal contra el acceso no autorizado, la divulgación y el uso indebido. Sin embargo, no podemos garantizar la seguridad completa de la información transmitida a través de Internet.</p>
    <p>8.6 Consentimiento: Al utilizar nuestro Sitio, usted acepta esta Política de Privacidad y acepta el procesamiento de su información personal de acuerdo con los términos aquí establecidos.</p>
    <p>8.7 Cambios en la Política de Privacidad: Nos reservamos el derecho de actualizar o modificar nuestra Política de Privacidad en cualquier momento. Los cambios se publicarán en esta página y entrarán en vigencia inmediatamente. Le recomendamos que revise periódicamente esta política para estar al tanto de cualquier cambio.</p>
</body>
    `;
  }
}

customElements.define('terms-elements', TermsAndConditions);
