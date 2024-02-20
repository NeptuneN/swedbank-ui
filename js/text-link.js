class TextLinkComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const textLinkTemplate = document.createElement('template');
    textLinkTemplate.innerHTML = `
      <style>
        .text-link {
          margin: unset;
          font-size: 16px;
          font-size: 1rem;
          text-decoration: unset;
          width: fit-content;

          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          left: -2px; /* small adjustment for the arrow */
          color: var(--swedbank-turquoise);
          cursor: pointer;
          
          &:before {
            position: relative;
            top: -1px; /* small adjustment for the arrow */
            display: block;
            content: "";
            height: 0px; 
            width: 0px;
            border: 5px solid;
            border-color: var(--swedbank-turquoise) var(--swedbank-turquoise) transparent transparent;
            transform: rotate(45deg);
          }
        }
      </style>
      <a class="text-link" href=${this.getAttribute('linkto')}>${this.getAttribute('text')}</a>
    `;
    shadow.appendChild(textLinkTemplate.content.cloneNode(true));
  }
}

customElements.define('ui-text-link', TextLinkComponent);