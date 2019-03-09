/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { LitElement, html, css } from 'lit-element';
import gravitonButtonStyles from './gvt-button.less';

export class GravitonButton extends LitElement {
  static get properties() {
    return {
      filled: { type: Boolean }
    }
  }
  static get styles () {
    return css([gravitonButtonStyles.toString()]);
  }
  render() {
    return html`
      <div class="btn-wrapping">
        <button class="btn ${this.filled ? 'fill' : 'light'}">
          <slot></slot>
          <mwc-ripple ?primary=${!this.filled} ?accent=${this.filled}></mwc-ripple>
        </button>
      </div>
    `;
  }
}

customElements.define('gvt-button', GravitonButton);