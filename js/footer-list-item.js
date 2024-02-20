class FooterListItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const footerListItem = document.createElement('template');
    footerListItem.innerHTML = `
        <style>
          a {
            text-decoration: unset; /* universal rule */
            color: unset; /* universal rule */
            font-size: 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;

            &:before {
              position: relative;
              top: -1px; /* small adjustment for the arrow */
              display: block;
              content: "";
              height: 0px; 
              width: 0px;
              border: 5px solid;
              border-color: var(--swedbank-main-color) var(--swedbank-main-color) transparent transparent;
              transform: rotate(45deg);
            }
          }
        </style>
        <li><a href="#">${this.getAttribute('text')}</a></li> 
    `;
    // I *could* make the href attribute dynamic, but the assignment doesn't demand it as they would all lead to the home page anyway
    shadow.appendChild(footerListItem.content.cloneNode(true));
  }
}

customElements.define('ui-footer-list-item', FooterListItem);