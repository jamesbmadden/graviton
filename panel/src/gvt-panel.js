/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { LitElement, html, css } from 'lit-element';
import gvtPanelStyles from './gvt-panel.less';

class GravitonPanel extends LitElement {

  static get properties () {
    return {
      expanded: { type: Boolean },
      value: { type: String }
    }
  }

  static get styles () {
    return css([gvtPanelStyles.toString()]);
  }

  constructor () {
    super();
    this.expanded = false;
  }

  render () {
    return html`
      <style>${gvtPanelStyles.toString()}</style>
      <div class="panel" ?expanded=${this.expanded}>
        <div class="panel-title" @click=${() => {
          this.expanded = !this.expanded;
        }}>
          <slot name="title"></slot><p class="panel-title-value">${this.value !== 'undefined' ? this.value : ''}</p>
          <i class="material-icons drop-icon">arrow_drop_down</i>
        </div>
        <div class="panel-body">
          <slot name="body"></slot>
        </div>
      </div>
    `;
  }

}

customElements.define('gvt-panel', GravitonPanel);