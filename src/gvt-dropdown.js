/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { LitElement, html, css } from 'lit-element';
import gvtDropdownStyles from './gvt-dropdown.less';

class GravitonDropdown extends LitElement {
  static get properties () {
    return {
      options: { type: Array },
      value: { type: String }
    }
  }
  static get styles () {
    return css([gvtDropdownStyles.toString()]);
  }
  connectedCallback () {
    super.connectedCallback();
    this.value = this.options[0];
  }
  render () {
    return html`
      <div class="select-container">
        <select id="select" @input=${event => {
          this.value = event.target.value;
          this.dispatchEvent(new Event('input'));
        }} @change=${(e)=>this.dispatchEvent(new Event('change'))}>
          ${this.options.map(option => {
            return html`<option>${option}</option>`;
          })}
        </select>
        <label class="select-label" for="select"><slot></slot></label>
        <i class="material-icons drop-icon">arrow_drop_down</i>
      </div>
    `;
  }
}

customElements.define('gvt-dropdown', GravitonDropdown);