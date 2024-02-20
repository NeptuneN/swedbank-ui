class ContactComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const contactTemplate = document.createElement('template');
    contactTemplate.innerHTML = `
        <style>
          :host {
            position: absolute;
          }

          .contact-content {
            width: max-content; /* temp maybe */

            .contact-wrapper {
              .contact-title {
                margin-top: unset;
                margin-bottom: 6px;
                font-family: var(--swedbank-font-family-secondary);
                font-weight: normal;
              }

              .contact {
                padding: unset; /* universal rule */
                margin: unset; /* universal rule */
                list-style: none; /* universal rule */

                .contact-item {
                  line-height: 24px;

                  .contact-number {
                    margin: 0 0 20px;
                    font-size: 32px;
                    font-size: 2rem;
                    font-weight: 1000;
                    color: var(--swedbank-orange);
                    /* font-family: The font used in the mockups is a custom font, so it's not available on the web for me to find. */
                  }
  
                  .contact-email {
                    display: block;
                    margin: 0 0 16px;
                    font-size: 16px;
                    font-size: 1rem;
                    font-weight: 500;
                    color: var(--swedbank-turquoise); 
                  }

                  .contact-social-media {
                    display: flex;
                    margin: 16px 0 0;
                    gap: 8px;

                    .sm-link {
                      img {
                        width: 24px;
                        height: 24px;
                      }
                    }
                  }
                }

                .contact-item:first-child {
                  line-height: unset;
                }
              }
            }
          }

          @media only screen and (max-width: 1024px) {
            :host {
              position: unset;
            }

            .contact-content {
              width: unset;
              padding-bottom: 4px;
              border-bottom: 1px solid var(--swedbank-gray2); 
            }
          }
        </style>
        <div class="contact-content">
          <div class="contact-wrapper">
            <h3 class="contact-title">Contact</h3>
            <ul class="contact">
              <li class="contact-item">
                <p class="contact-number">6 310 310</p>
              </li>
              <li class="contact-item">
                <a class="contact-email" href="mailto:info@swedbank.ee">info@swedbank.ee</a>
              </li>
              <li class="contact-item">
                <span>SWEDBANK AS</span>
              </li>
              <li class="contact-item">
                <span>Liivalaia 8, 15040 Tallinn</span>
              </li>
              <li class="contact-item">
                <span>SWIFT kood/BIC: HABAEE2X</span>
              </li>
              <li class="contact-item">
                <span>Reg. number: 10060701</span>
              </li>
              <li class="contact-item">
                <div class="contact-social-media">
                  <a class="sm-link" href="#"><img src="Assets/social/facebook.svg" alt="facebook"></a>
                  <a class="sm-link" href="#"><img src="Assets/social/instagram.svg" alt="Instagram"></a>
                  <a class="sm-link" href="#"><img src="Assets/social/youtube.svg" alt="YouTube"></a>
                  <a class="sm-link" href="#"><img src="Assets/social/twitter.svg" alt="Twitter"></a>
                  <a class="sm-link" href="#"><img src="Assets/social/skype.svg" alt="Skype"></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      `;
    shadow.appendChild(contactTemplate.content.cloneNode(true));
  }
}

customElements.define('ui-contact', ContactComponent);