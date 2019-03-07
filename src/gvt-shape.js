import { LitElement, html } from 'lit-element';

class GravitonShape extends LitElement {

  static get properties () {
    return {
      shape: { type: String }
    }
  }

  render () {
    if (this.shape === 'cut-edges') {
      return html`
        <style>
          .shape {
            display: inline-block;
            clip-path: polygon(0 16px, 16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px))
          }
        </style>
        <div class="shape">
          <slot></slot>
        </div>
      `;
    }
  }

}

customElements.define('gvt-shape', GravitonShape);