class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const headerTemplate = document.createElement('template');
    headerTemplate.innerHTML = `
        <style>
          header {
            a {
              text-decoration: unset; /* universal rule */
              color: unset; /* universal rule */
              font-size: 16px;
              font-size: 1rem;
              cursor: pointer;
            }
  
            svg {
              fill: var(--swedbank-main-color);
            }
  
            .gradient-bar {
              background: var(--swedbank-gradient);
              height: 8px;
              width: 100%;
            }
  
            .header-content {
              display: flex;
              flex-direction: column;
            }
  
            .logo {
              width: var(--logo-width);
              padding: var(--logo-padding);
            }

            .mobile-logo-container {
              display: none;

              justify-content: space-between;
              align-items: center;
              padding: var(--logo-padding);
            }
  
            .menu {
              display: grid;
              overflow: hidden;
              grid-template-columns: 1fr 1fr;
              justify-items: center;
              align-items: center;

              .menu-tab {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                font-family: var(--swedbank-font-family-secondary);
                font-weight: 500;
                padding: var(--menu-tab-padding-tb) 0;
                width: var(--menu-tab-width);
                border-top: 2px solid var(--swedbank-gray);
                color: var(--swedbank-main-color);
              }

              .menu-tab.active {
                color: var(--swedbank-orange);
  
                svg {
                  fill: var(--swedbank-orange);
                }
              }

              .menu-tab:nth-child(1) {
                border-right: 2px solid var(--swedbank-gray);
              }

              .menu-tab:nth-child(2) {
                border-left: 2px solid var(--swedbank-gray);
              }

              .menu-tab:hover {
                background-color: #fdf8f4;
                border-top: 2px solid orange;
                color: var(--swedbank-orange);
    
                svg {
                  fill: var(--swedbank-orange);
                }
              }
            }
  
            .mobile-menu {
              display: none;

              flex-direction: column;

              .menu-tab {
                padding: var(--menu-tab-padding-tb);
                border-top: 2px solid var(--swedbank-gray);
                color: var(--swedbank-main-color);
              }

              .menu-tab.active {
                color: var(--swedbank-orange);
              }
            }
          }

          @media only screen and (max-width: 768px) {
            header {
              .header-content {
                .logo {
                  display: none;
                }

                .mobile-logo-container {
                  display: flex;
                }

                .menu {
                  display: none;
                }
  
                .mobile-menu {
                  .menu-tab {
                    padding: calc(var(--menu-tab-padding-tb) * 2) var(--menu-tab-padding-lr);
                  }
                }
              }
            }
          }
        </style>
        <header>
          <div class="gradient-bar"></div>
          <div class="header-content">
            <img class="logo" src="Assets/swedbank_logo.png" alt="Logo">
            <div class="mobile-logo-container">
              <img class="mobile-logo" src="Assets/swedbank_logo.png" alt="Logo">
              <ui-dropdown-burger></ui-dropdown-burger>
            </div>
            <nav class="mobile-menu">
              <a data-tab="home" class="menu-tab active">
                <span class="menu-tab-text">Home</span>
              </a>
              <a data-tab="everyday-banking" class="menu-tab">
                <span class="menu-tab-text">Everyday Banking</span>
              </a>
            </nav>
            <nav class="menu">
              <a data-tab="home" class="menu-tab active">
                <svg style="width: 20px; height: 19px;">
                  <use href="Assets/home.svg#home"></use>
                </svg>
                <span class="menu-tab-text">Home</span>
              </a>
              <a data-tab="everyday-banking" class="menu-tab">
                <svg style="width: 20px; height: 19px;">
                  <use href="Assets/wallet.svg#wallet"></use>
                </svg>
                <span class="menu-tab-text">Everyday Banking</span>
              </a>
            </nav>
          </div>
        </header>
      `;
    shadow.appendChild(headerTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    window.addEventListener('DOMContentLoaded', () => {
      this.dimBackground();
      this.activeTab();
    });
  }

  dimBackground() {
    const addDim = () => document.body.classList.add('dimmed');
    const removeDim = () => document.body.classList.remove('dimmed');

    this.shadowRoot.querySelectorAll('.menu .menu-tab, .mobile-menu .menu-tab').forEach(tab => {
      // Desktop
      tab.addEventListener('mouseover', addDim);
      tab.addEventListener('mouseout', removeDim);

      // Mobile
      tab.addEventListener('touchstart', addDim);
      tab.addEventListener('touchend', removeDim);
    });
  }

  toggleContent() {
    const tabs = this.shadowRoot.querySelectorAll('.menu .menu-tab, .mobile-menu .menu-tab');

    const homeWebComponent = document.querySelector('ui-home');
    const homeContent = homeWebComponent.shadowRoot.querySelector('.home-content');
    const everydayBankingContent = homeWebComponent.shadowRoot.querySelector('.everyday-banking-content');
  
    tabs.forEach(tab => {
      if (tab.classList.contains('active')) {
        const isHomeTab = tab.getAttribute('data-tab') === 'home';
        homeContent.style.display = isHomeTab ? 'flex' : 'none';
        everydayBankingContent.style.display = isHomeTab ? 'none' : 'flex';
      }
    });
  }

  activeTab() {
    const tabs = this.shadowRoot.querySelectorAll('.menu .menu-tab, .mobile-menu .menu-tab');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');
        this.toggleContent();
      });
    });
  }
}

customElements.define('ui-header', HeaderComponent);