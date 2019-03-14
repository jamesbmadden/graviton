/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { LitElement, html, css } from 'lit-element';
import styles from './gvt-code.less';

export class GravitonCode extends LitElement {
  static get properties() {
    return {
      lang: { type: String },
      src: { type: String },
      text: { type: String },
      error: { type: Boolean }
    }
  }
  static get styles () {
    return css([styles.toString()]);
  }
  connectedCallback () {
    super.connectedCallback();
    this.text = 'loading...';
    console.log(this.text);
    if (this.src) {
      fetch(this.src).then(response => response.text()).then(text => this.text = text).catch(error => {
        this.error = true;
        this.text = 'error';
      });
    }
  }
  render() {
    return html`
      <style>
        pre:before {
          content: "${this.lang}";
        }
      </style>
      <pre><br><code>${this.src ? this.text : html`<slot></slot>`}</code>
      </pre>
    `;
  }
}

customElements.define('gvt-code', GravitonCode);