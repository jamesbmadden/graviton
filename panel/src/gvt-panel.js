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
          <svg class="drop-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
        </div>
        <div class="panel-body">
          <slot name="body"></slot>
        </div>
      </div>
    `;
  }

}

customElements.define('gvt-panel', GravitonPanel);