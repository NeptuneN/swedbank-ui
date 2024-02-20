class TextBlobComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const textBlobTemplate = document.createElement('template');
    textBlobTemplate.innerHTML = `
      <style>
        .text-blob {
          display: flex;
          align-items: center;
          gap: 6px;
          width: fit-content;

          &:before {
            display: block;
            content: "";
            height: 14px;
            width: 7px;
            background: var(--swedbank-purple);
            border-radius: 0 14px 14px 0;
          }
        }
      </style>
      <a class="text-blob">${this.getAttribute('text')}</a>
    `;
    shadow.appendChild(textBlobTemplate.content.cloneNode(true));
  }
}

customElements.define('ui-text-blob', TextBlobComponent);