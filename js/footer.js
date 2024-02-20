class FooterComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const footerTemplate = document.createElement('template');
    footerTemplate.innerHTML = `
        <style>
          footer {
            svg {
              fill: var(--swedbank-main-color);
            }

            .gradient-bar {
              background: var(--swedbank-gradient);
              height: 4px;
              width: 100%;
            }

            .footer-content {
              position: relative;
              display: flex;
              justify-content: center;
              padding: var(--footer-content-padding-tb) var(--footer-content-padding-lr);

              .footer-blocks {
                position: relative;
                display: flex;
                width: 100%;
                max-width: var(--footer-content-width);
              }

              .lists {
                display: flex;
                justify-content: center;
                gap: 96px; /* 6rem */
                width: 100%;

                .list-wrapper {
                  .list-title {
                    margin-top: unset;
                    margin-bottom: 12px;
                    font-family: var(--swedbank-font-family-secondary);
                    font-weight: normal;
                  }
  
                  .list {
                    padding: unset; /* universal rule */
                    margin: unset; /* universal rule */
                    list-style: none; /* universal rule */
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    left: -2px; /* small adjustment for the arrow */
                    gap: 12px; /* 0.5rem */
                  }
                }
              }

              .lists-mobile {
                display: none;

                flex-direction: column;
                gap: 16px; /* 2rem */
                width: 100%;

                .list-wrapper:first-child {
                  padding: 12px 0 16px;
                }

                .list-wrapper {
                  padding: 0 0 16px;
                  border-bottom: 1px solid var(--swedbank-gray2);

                  .list-heading-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .list-title {
                      margin: unset;
                      font-weight: normal;
                    }
                  }
                  
                  .list {
                    list-style: none; /* universal rule */
                    padding: unset; /* universal rule */

                    display: none;
                    margin: 12px 0 0;
                    flex-direction: column;
                    position: relative;
                    left: -2px; /* small adjustment for the arrow */
                    gap: 12px; /* 0.5rem */
                  }
                }
              }
            }
          }

          @media only screen and (max-width: 1440px) {
            footer {
              .footer-content {
                .footer-blocks {
                  .lists {
                    gap: 32px; /* 2rem */
                  }
                }
              }
            }
          }

          @media only screen and (max-width: 1024px) {
            footer {
              .footer-content {
                .footer-blocks {
                  flex-direction: column;

                  .lists {
                    display: none;
                  }

                  .lists-mobile {
                    display: flex;
                  }
                }
              }
            }
          }
        </style>
        <footer>
          <div class="gradient-bar"></div>
          <div class="footer-content">
            <div class="footer-blocks">
              <ui-contact></ui-contact>
              <div class="lists">
                <div class="list-wrapper">
                  <h3 class="list-title">Quicklinks</h3>
                  <ul class="list">
                    <ui-footer-list-item text="Calculators"></ui-footer-list-item>
                    <ui-footer-list-item text="Prices"></ui-footer-list-item>
                    <ui-footer-list-item text="Terms of service"></ui-footer-list-item>
                    <ui-footer-list-item text="Privacy and security"></ui-footer-list-item>
                  </ul>
                </div>
                <div class="list-wrapper">
                  <h3 class="list-title">Join Swedbank</h3>
                  <ul class="list">
                    <ui-footer-list-item text="Client programs"></ui-footer-list-item>
                    <ui-footer-list-item text="Business customers"></ui-footer-list-item>
                    <ui-footer-list-item text="Jobs"></ui-footer-list-item>
                    <ui-footer-list-item text="Internships"></ui-footer-list-item>
                  </ul>
                </div>
                <div class="list-wrapper">
                  <h3 class="list-title">Services</h3> <!-- tooted feels weird -->
                  <ul class="list">
                    <ui-footer-list-item text="Everyday banking"></ui-footer-list-item>
                    <ui-footer-list-item text="Loans"></ui-footer-list-item>
                    <ui-footer-list-item text="Insurance"></ui-footer-list-item>
                    <ui-footer-list-item text="Cards"></ui-footer-list-item>
                    <ui-footer-list-item text="Stocks"></ui-footer-ist-item>
                  </ul>
                </div>
              </div>
              <div class="lists-mobile">
                <div class="list-wrapper">
                  <div class="list-heading-container">
                    <h3 class="list-title">Quicklinks</h3>
                    <ui-dropdown-arrow></ui-dropdown-arrow>
                  </div>
                  <ul class="list">
                    <ui-footer-list-item text="Calculators"></ui-footer-list-item>
                    <ui-footer-list-item text="Prices"></ui-footer-list-item>
                    <ui-footer-list-item text="Terms of service"></ui-footer-list-item>
                    <ui-footer-list-item text="Privacy and security"></ui-footer-list-item>
                  </ul>
                </div>
                <div class="list-wrapper">
                  <div class="list-heading-container">
                    <h3 class="list-title">Join Swedbank</h3>
                    <ui-dropdown-arrow></ui-dropdown-arrow>
                  </div>
                  <ul class="list">
                    <ui-footer-list-item text="Client programs"></ui-footer-list-item>
                    <ui-footer-list-item text="Business customers"></ui-footer-list-item>
                    <ui-footer-list-item text="Jobs"></ui-footer-list-item>
                    <ui-footer-list-item text="Internships"></ui-footer-list-item>
                  </ul>
                </div>
                <div class="list-wrapper">
                  <div class="list-heading-container">
                    <h3 class="list-title">Services</h3>
                    <ui-dropdown-arrow></ui-dropdown-arrow>
                  </div>
                  <ul class="list">
                    <ui-footer-list-item text="Everyday banking"></ui-footer-list-item>
                    <ui-footer-list-item text="Loans"></ui-footer-list-item>
                    <ui-footer-list-item text="Insurance"></ui-footer-list-item>
                    <ui-footer-list-item text="Cards"></ui-footer-list-item>
                    <ui-footer-list-item text="Stocks"></ui-footer-ist-item>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      `;
    shadow.appendChild(footerTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    window.addEventListener('DOMContentLoaded', () => {
      this.updateMinHeight();
      window.addEventListener('resize', () => this.updateMinHeight());
    });
  }

  updateMinHeight() {
    const uiContact = this.shadowRoot.querySelector('ui-contact');
    const footerContent = this.shadowRoot.querySelector('.footer-content');

    if (uiContact && footerContent) {
      const uiContactHeight = uiContact.offsetHeight;
      footerContent.style.minHeight = `${uiContactHeight}px`;
    }
  }
}

customElements.define('ui-footer', FooterComponent);