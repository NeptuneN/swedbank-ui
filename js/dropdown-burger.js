class DropdownBurgerComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const dropdownBurgerTemplate = document.createElement('template');
    dropdownBurgerTemplate.innerHTML = `
      <style>
        .dropdown-burger {
          display: flex;
          flex-direction: column;
          gap: 8px;
          cursor: pointer;

          .line {
            width: 24px;
            height: 2px;
            background-color: var(--swedbank-main-color);
          }
        }
        
      </style>
      <div class="dropdown-burger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    `;
    shadow.appendChild(dropdownBurgerTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.toggleDropdown();
  }

  toggleDropdown() {
    this.addEventListener('click', () => {
      const dropdownBurger = this.shadowRoot.querySelector('.dropdown-burger');
      dropdownBurger.classList.toggle('active');

      // the dropdownable menu needs to be a sibling of the dropdowns parent, one after the other
      const dropdownable = this.parentElement.nextElementSibling;
      dropdownable.style.display = dropdownable.style.display === 'flex' ? 'none' : 'flex';
    });
  }
}

customElements.define('ui-dropdown-burger', DropdownBurgerComponent);