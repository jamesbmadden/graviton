/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { LitElement, html, css } from 'lit-element';
import gvtInputStyles from './gvt-input.less';

export class GravitonInput extends LitElement {
  static get properties() {
    return {
      type: String,
      autocomplete: String,
      value: String
    }
  }
  static get styles() {
    return css([gvtInputStyles.toString()]);
  }
  constructor() {
    super();
    if (this.value == undefined) {
      this.value = '';
    }
  }
  render() {
    return html`
      <div class="inputContainer">
        <input .value=${this.value} @input=${(e)=> {
          this.value = e.target.value;
          this.dispatchEvent(new Event('input'));
        }} @change=${(e)=>this.dispatchEvent(new Event('change'))} class="fieldInput" name="fieldInput" id="fieldInput" placeholder=" " type="${this.type}" autocomplete="${this.autocomplete}">
        <label class="fieldInputLabel" for="fieldInput"><slot></slot></label>
      </div>`;
  }
}

customElements.define('gvt-input', GravitonInput);