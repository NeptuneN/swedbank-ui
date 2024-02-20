class RegularButtonComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const regularButtonTemplate = document.createElement('template');
    regularButtonTemplate.innerHTML = `
      <style>
        :host {
          align-self: flex-end; /* there has to be a better way */
        }

        .regular-button {
          display: block;
          position: relative;
          padding: var(--button-padding);
          border-radius: 4px;
          color: var(--swedbank-white);
          font-size: 16px;
          font-size: 1rem;
          font-family: var(--swedbank-font-family-secondary);
          font-weight: 300;
          cursor: pointer;
        }

        @media only screen and (max-width: 768px) {
          :host {
            width: 100%;
          }

          .regular-button {
            display: block;
            text-align: center;
          }
        }
      </style>
      <a style="background-color: var(--swedbank-${this.getAttribute('color')})" class="regular-button">${this.getAttribute('text')}</a>
    `;
    shadow.appendChild(regularButtonTemplate.content.cloneNode(true));
  }
}

customElements.define('ui-regular-button', RegularButtonComponent);