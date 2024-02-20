class DropdownArrowComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const dropdownArrowTemplate = document.createElement('template');
    dropdownArrowTemplate.innerHTML = `
      <style>
        .dropdown-arrow {
          position: relative;
          top: -4px; /* small adjustment for the arrow */
          right: 4px;
          width: 10px;
          height: 10px;
          transform: rotate(135deg);
          cursor: pointer;
          
          &::before {
            content: '';
            width: 100%;
            height: 100%;
            border-width: 2px 2px 0 0;
            border-style: solid;
            border-color: var(--swedbank-orange);
            display: block;
          }
        }

        .dropdown-arrow.active {
          top: 4px; /* small adjustment for the arrow */
          right: 6px;
          transform: rotate(-45deg);

          &::before {
            border-color: var(--swedbank-main-color);
          }
        }
      </style>
      <div class="dropdown-arrow"></div>
    `;
    shadow.appendChild(dropdownArrowTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.toggleDropdown();
  }

  toggleDropdown() {
    this.addEventListener('click', () => {
      const dropdownArrow = this.shadowRoot.querySelector('.dropdown-arrow');
      dropdownArrow.classList.toggle('active');

      // the dropdownable menu needs to be a sibling of the dropdowns parent, one after the other
      const dropdownable = this.parentElement.nextElementSibling;
      dropdownable.style.display = dropdownable.style.display === 'flex' ? 'none' : 'flex';
    });
  }
}

customElements.define('ui-dropdown-arrow', DropdownArrowComponent);