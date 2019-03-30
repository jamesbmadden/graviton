import { LitElement, html } from 'lit-element';

class GravitonRipple extends LitElement {

  static get properties () {
    return {
      colour: { type: String }
    }
  }

  connectedCallback () {
    super.connectedCallback();
    this.addEventListener('mousedown', event => {
      if (this.shadowRoot.querySelector('.ripple')) {
        this.shadowRoot.removeChild(this.shadowRoot.querySelector('.ripple'));
      }
      const ripple = document.createElement('div');
      const { x, y, width, height} = this.getBoundingClientRect();
      ripple.className = 'ripple';
      ripple.style.backgroundColor = this.colour || 'black';
      let diameter = Math.max(width, height)*4; // Finds the longer dimension of the element and sets it as the diameter
      ripple.style.top = `${event.clientY - y - diameter/2}px`;
      ripple.style.left = `${event.clientX - x - diameter/2}px`;
      ripple.style.height = ripple.style.width = `${diameter}px`;
      this.shadowRoot.appendChild(ripple);
      let beenTime = false;
      let mouseUp = false;
      setTimeout(() => {
        beenTime = true;
        if (mouseUp) {
          ripple.classList.add('fade');
          setTimeout(() => {
            this.shadowRoot.removeChild(ripple);
          }, 100);
        }
      }, 400);
      ripple.addEventListener('mouseup', event => {
        mouseUp = true;
        if (beenTime) {
          ripple.classList.add('fade');
          setTimeout(() => {
            this.shadowRoot.removeChild(ripple);
          }, 100);
        }
      });
    });
  }

  render () {
    return html`
      <style>
        :host {
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        @keyframes ripple {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
        .ripple {
          position: relative;
          border-radius: 50%;
          opacity: 0.25;
          animation: ripple 0.4s;
          transition: opacity 0.1s;
        }
        .ripple.fade {
          opacity: 0;
        }
      </style>
    `;
  }

}

customElements.define('gvt-ripple', GravitonRipple);