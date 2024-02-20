class FormButtonComponent extends HTMLElement { // NOT IN USE
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const formButtonTemplate = document.createElement('template');
    formButtonTemplate.innerHTML = `
      <style>
        :host {
          align-self: flex-end; /* there has to be a better way */
        }

        .form-button {
          border: unset;
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

          .form-button {
            width: 100%;
            display: block;
            text-align: center;
          }
        }
      </style>
      <button type="submit" style="background-color: var(--swedbank-${this.getAttribute('color')})" class="form-button">${this.getAttribute('text')}</button>
    `;
    shadow.appendChild(formButtonTemplate.content.cloneNode(true));
    
    var submit = this.appendChild(document.createElement('button'));
    submit.style.display = 'none';
    this.onclick = () => submit.click();
  }

}
customElements.define('ui-form-button', FormButtonComponent);