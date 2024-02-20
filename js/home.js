class HomeComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const homeTemplate = document.createElement('template');
    homeTemplate.innerHTML = `
      <style>
        .home-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--home-content-padding-tb) var(--home-content-padding-lr);
          
          .content-blocks {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: var(--home-content-width);

            .view-title {
              margin: unset;
              font-weight: 1000;
              font-size: 32px;
              font-size: 2rem;
              color: var(--swedbank-orange);
              text-align: left;
              padding-left: var(--home-content-padding-lr);
              margin: 0 0 20px;
            }

            .blocks-wrapper {
              display: flex;
              flex-direction: column;
              gap: 16px;

              .overview {
                padding: var(--home-overview-padding);
                background-color: var(--swedbank-white);

                .overview-heading {
                  display: flex;
                  justify-content: space-between;
                  padding: 20px 10px;

                  .overview-subtitle {
                    margin: unset;
                    font-size: 16px;
                    font-size: 1rem;
                    font-weight: bold;
                  }

                  .overview-downloads {
                    display: flex;
                    gap: 8px;

                    .overview-download-item {
                      display: flex;
                      align-items: center;
                      gap: 4px;
                      text-decoration: unset;
                      font-size: 14px;
                      font-size: 0.875rem;
                      color: var(--swedbank-turquoise);
                      cursor: pointer;
                    }
                  }
                }

                .overview-table {
                  width: 100%;
                  border-collapse: collapse;

                  .overview-table-heading, .overview-table-data {
                    font-size: 14px;
                    font-size: 0.875rem;
                    font-weight: 400;
                    text-align: right;
                    padding: 10px;
                  }

                  .overview-table-heading:first-child, .overview-table-data:first-child {
                    text-align: left;
                  }

                  .overview-table-entry {
                    border-bottom: 1px solid var(--swedbank-gray);
                  }

                  .overview-table-entry:last-child {
                    border-bottom: unset;

                    .overview-table-data {
                      font-weight: bold;
                    }

                    .overview-table-data.total {
                      font-family: var(--swedbank-font-family-secondary);
                      font-size: 24px;
                      font-size: 1.5rem;
                      font-weight: normal;
                    }
                  }
                  
                  .overview-table-heading {
                    background-color: var(--swedbank-lightblue);
                  }

                  .overview-table-data {
                    .overview-table-data-name {
                      color: var(--swedbank-turquoise);
                    }
                  }
                }
              }
    
              .values {
                background-color: var(--swedbank-white);
                padding: var(--home-content-block-padding);
    
                .values-wrapper {
                  display: grid;
                  grid-template-columns: repeat(3, 1fr);
                  gap: 16px;
    
                  .value {
                    display: flex;
                    flex-direction: column;
                    background: var(--swedbank-beige);
    
                    .value-title {
                      position: relative;
                      padding: 10px;
                      margin: unset;
                      color: var(--swedbank-white);
    
                      &:before {
                        content: "";
                        position: absolute;
                        top: 40px;
                        left: 15px;
                        bottom: 0px;
                        z-index: 1;
                        border: solid 15px transparent;
                      }
                    }
    
                    .value-description {
                      display: flex;
                      flex-direction: column;
                      gap: 12px;
                      padding: 30px 10px;
                      flex: 1 1 auto;
                      justify-content: center;
  
                      .value-text {
                        margin: unset;
                        font-size: 16px;
                        font-size: 1rem;
                        text-decoration: unset;
                      }

                      .value-text.bold {
                        font-weight: bold;
                      }
                    }
                  }
    
                  .value#value-open {
                    .value-title {
                      background: var(--swedbank-blue);
    
                      &:before {
                        border-top-color: var(--swedbank-blue);
                      }
                    }
                  }
    
                  .value#value-caring {
                    .value-title {
                      background: var(--swedbank-yellow);
    
                      &:before {
                        border-top-color: var(--swedbank-yellow);
                      }
                    }
                  }
    
                  .value#value-simple {
                    .value-title {
                      background: var(--swedbank-purple);
    
                      &:before {
                        border-top-color: var(--swedbank-purple);
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .everyday-banking-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--home-content-padding-tb) var(--home-content-padding-lr);

          display: none;

          .content-blocks {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: var(--home-content-width);

            .view-title {
              margin: unset;
              font-weight: 1000;
              font-size: 32px;
              font-size: 2rem;
              color: var(--swedbank-orange);
              text-align: left;
              padding-left: var(--home-content-padding-lr);
              margin: 0 0 20px;
            }

            .blocks-wrapper {
              display: flex;
              flex-direction: column;
              gap: 16px;

              .banking, .welcome {
                background-color: var(--swedbank-white);
                padding: var(--home-content-block-padding);
              }

              .banking-folders {
                display: flex;

                .banking-folder-item {
                  display: block;
                  padding: 12px var(--home-content-block-padding);
                  background-color: var(--swedbank-gray);
                  cursor: pointer;
                }

                .banking-folder-item.active {
                  background-color: var(--swedbank-white);
                }
              }

              .banking {
                .banking-wrapper {

                  .payments-block {
                    display: flex;

                    .payments-form {
                      width: 100%;
                      display: flex;
                      flex-direction: column;
                      gap: 16px;
                      align-items: center;
  
                      .payments-form-rows {
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
  
                        .payments-form-row {
                          display: flex;
                          gap: 8px;
                          justify-content: flex-end;
                          align-items: center;
    
                          .payments-input-container {
                            width: 300px;
                            display: flex;
                            gap: 8px;
    
                            :first-child {
                              width: 100%;
                            }
    
                            select, input {
                              border-radius: 5px;
                              padding: 8px;
                              border: 1px solid var(--swedbank-turquoise);
                            }
                            
                            select {
                              background-color: var(--swedbank-lightblue);
                            }
                          }
                        }
                      }
  
                      .payments-form-buttons {
                        align-self: flex-end;
                        display: flex;
                        gap: 8px;
                      }
                    }
                  }

                  .calculator-block {
                    display: none;

                    justify-content: space-between;

                    .calculator-wrapper {
                      display: flex;
                      flex-direction: column;
                      gap: 8px;
                      align-items: flex-end;

                      .calculator-row {
                        display: flex;
                        gap: 8px;
                        justify-content: flex-end;
                        align-items: center;
  
                        .calculator-input-container {
                          width: 250px;
                          display: flex;
                          gap: 8px;
  
                          select, input {
                            border-radius: 5px;
                            padding: 8px;
                            border: 1px solid var(--swedbank-turquoise);
                          }
  
                          select {
                            background-color: var(--swedbank-lightblue);
                          }
  
                          .loan-slider {
                            appearance: none;
                            -webkit-appearance: none;
                            border: unset;
                            outline: none;
                            height: 10px;
                            background: var(--swedbank-gray);
                            padding: unset;
                          }
  
                          .loan-slider::-webkit-slider-thumb {
                            -webkit-appearance: none;
                            appearance: none;
                            width: 25px;
                            height: 25px;
                            border-radius: 50%; 
                            background: var(--swedbank-orange);
                            cursor: pointer;
                          }
                          
                          .loan-slider::-moz-range-thumb {
                            width: 25px;
                            height: 25px;
                            border-radius: 50%;
                            background: var(--swedbank-orange);
                            cursor: pointer;
                          }
                        }
                      }

                      .calculator-row.loan {
                        .calculator-input-container {
                          display: flex;
                          flex-direction: column;
                          gap: 8px;
  
                          .current-value {
                            position: relative;

                            #current-value {
                              font-family: var(--swedbank-font-family-secondary);
                            }
  
                            span {
                              width: fit-content;
                              font-size: 24px;
                              font-size: 1.5rem;
                              color: var(--swedbank-orange);
                            }
                          }
  
                          .slider-values {
                            display: flex;
                            justify-content: space-between;
                          }
                        }
                      }
                    }

                    .result-wrapper {
                      width: 33%;
                      display: flex;
                      flex-direction: column;
                      gap: 16px;
                      border-left: 1px solid var(--swedbank-gray2);
                      padding-left: 16px;

                      .result-payment {
                        font-family: var(--swedbank-font-family-secondary);
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        border-bottom: 1px solid var(--swedbank-gray2);
                        padding: 0 0 16px;

                        .result {
                          margin: unset;
                        }

                        .result-total {
                          #monthly-payment {
                            font-size: 24px;
                            font-size: 1.5rem;
                            color: var(--swedbank-orange);
                          }
                        }
                      }

                      .result-apply {
                        display: flex;
                        justify-content: flex-end;
                      }
                    }
                  }
                }
              }

              .welcome {
                .yellow-bubble {
                  display: flex;
                  justify-content: center;
                  align-items: center;

                  .yellow-bubble-text {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: unset;
                    width: 100px;
                    height: 100%;
                    background-color: var(--swedbank-yellow);
                    color: var(--swedbank-white);
                    clip-path: circle(50px);
                  }
                }

                .welcome-wrapper {
                  background: var(--swedbank-lightblue);
                  padding: var(--home-content-block-padding);
                  display: flex;
                  gap: 16px;

                  .welcome-text {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;

                    .welcome-text-title {
                      margin: unset;
                      font-size: 24px;
                      font-size: 1.5rem;
                      font-weight: bold;
                    }

                    .welcome-text-description {
                      margin: unset;
                      font-size: 14px;
                      font-size: 0.875rem;
                      line-height: 24px;
                    }
                  }
                }
              }
            }
          }
        }

        @media only screen and (max-width: 1024px) {
          .everyday-banking-content {
            .content-blocks {
              .blocks-wrapper {
                .banking-container {
                  .banking {
                    .calculator-block {
                      .result-wrapper {
                        .result-payment {
                          flex-direction: column;
                          align-items: flex-start;
                          gap: 8px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        @media only screen and (max-width: 768px) {
          .home-content {
            padding: calc(var(--home-content-padding-tb) / 2) calc(var(--home-content-padding-lr) / 2);
            padding-bottom: calc(var(--home-content-padding-tb) * 2);

            .content-blocks {
              .view-title {
                margin: 0 0 12px;
                padding-left: calc(var(--home-content-padding-lr) / 2);
              }

              .blocks-wrapper {
                .overview {
                  .overview-table {
                    .overview-table-entry {
                      .overview-table-heading:not(:first-child):not(:last-child), .overview-table-data:not(:first-child):not(:last-child) {
                        display: none;
                      }

                      .overview-table-data.total {
                        width: 100%;
                      }
                    }
                  }
                }
  
                .values {
                  padding: calc(var(--home-content-block-padding) / 2);

                  .values-wrapper {
                    gap: 10px;
                    grid-template-columns: 1fr;
                  }
                }
              }
            }
          }

          .everyday-banking-content {
            padding: calc(var(--home-content-padding-tb) / 2) calc(var(--home-content-padding-lr) / 2);
            padding-bottom: calc(var(--home-content-padding-tb) * 2);
            .content-blocks {
              .view-title {
                margin: 0 0 12px;
                padding-left: calc(var(--home-content-padding-lr) / 2);
              }

              .blocks-wrapper {
                .banking {
                  .banking-wrapper {
                    .payments-block {
                      .payments-form {
                        gap: 16px;
  
                        .payments-form-rows {
                          width: 100%;
  
                          .payments-form-row {
                            justify-content: unset;
                            align-items: flex-start;
                            flex-direction: column;
  
                            .payments-input-container {
                              width: 100%;
                              display: flex;
                              flex-direction: column;
                              gap: 8px;
  
                              :first-child {
                                width: unset;
                              }
                            }
                          }
                        }
  
                        .payments-form-buttons {
                          flex-direction: column;
                          align-self: unset;
                          width: 100%;
                        }
                      }
                    }

                    .calculator-block {
                      display: flex;
                      flex-direction: column;
                      gap: 16px;

                      .calculator-wrapper {
                        align-items: flex-start;

                        .calculator-row {
                          justify-content: unset;
                          align-items: unset;
                          flex-direction: column;
                          width: 100%;
                          
                          .calculator-input-container {
                            width: unset;

                            select {
                              width: 100%;
                            }
                          }
                        }
                      }

                      .result-wrapper {
                        width: 100%;
                        padding: unset;
                        border: unset;
                      }
                    }
                  }
                }

                .welcome {
                  padding: calc(var(--home-content-block-padding) / 2);

                  .welcome-wrapper {
                    padding: calc(var(--home-content-block-padding) / 2);
                    flex-direction: column;

                    .yellow-bubble {
                      .yellow-bubble-text {
                        height: 100px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      </style>
      <!-- HOME VIEW -->
      <div class="home-content">
        <div class="content-blocks">
          <h2 class="view-title">Home</h2>
          <div class="blocks-wrapper">
            <div class="overview">
              <div class="overview-heading">
                <h3 class="overview-subtitle">Your Swedbank overview</h3>
                <div class="overview-downloads">
                  <!-- i dont have paths for these -->
                  <a href="example.pdf" download class="overview-download-item">
                    <svg style="width: 20px; height: 20px;">
                      <use href="Assets/pdf.svg#pdf"></use>
                    </svg>
                    <span>PDF</span>
                  </a>
                  <a href="example.xsl" download class="overview-download-item">
                    <svg style="width: 20px; height: 20px;">
                      <use href="Assets/pdf.svg#pdf"></use>
                    </svg>
                    <span>XSL</span>
                  </a>
                </div>
              </div>
              <table class="overview-table">
                <tr class="overview-table-entry">
                  <th class="overview-table-heading">Account</th>
                  <th class="overview-table-heading">Balance</th>
                  <th class="overview-table-heading">Credit</th>
                  <th class="overview-table-heading">Reserved</th>
                  <th class="overview-table-heading">Available</th>
                </tr>
                <tr class="overview-table-entry">
                  <td class="overview-table-data">
                    <a href="#" class="overview-table-data-name">Siim Tamm</a>
                    <span class="overview-table-data-iban">EE752200221057734534</span>
                  </td>
                  <td class="overview-table-data">3 342 000.00</td>
                  <td class="overview-table-data">20.00</td>
                  <td class="overview-table-data">725.00</td>
                  <td class="overview-table-data">900.56 EUR</td>
                </tr>
                <tr class="overview-table-entry">
                  <td class="overview-table-data">
                    <a href="#" class="overview-table-data-name">Marju Lepik</a>
                    <span class="overview-table-data-iban">EE752200221057734534</span>
                  </td>
                  <td class="overview-table-data">50.90</td>
                  <td class="overview-table-data">2 000.00</td>
                  <td class="overview-table-data"></td>
                  <td class="overview-table-data">3 000.00 EUR</td>
                </tr>
                <tr class="overview-table-entry">
                  <td class="overview-table-data">
                    <a href="#" class="overview-table-data-name">Liina Roosipõld</a>
                    <span class="overview-table-data-iban">EE752200221057734534</span>
                  </td>
                  <td class="overview-table-data">12 041.00</td>
                  <td class="overview-table-data">20.00</td>
                  <td class="overview-table-data"></td>
                  <td class="overview-table-data">1 300.12 EUR</td>
                </tr>
                <tr class="overview-table-entry">
                  <!-- If making table rows into web components was easier, I would've-->
                  <td class="overview-table-data">Total:</td>
                  <td class="overview-table-data">5456.56</td>
                  <td class="overview-table-data">456.56</td>
                  <td class="overview-table-data"></td>
                  <td class="overview-table-data total">456.56 EUR</td>
                </tr>
              </table>
            </div>
            <div class="values">
              <div class="values-wrapper">
                <div class="value" id="value-open">
                  <h3 class="value-title">Open</h3>
                  <div class="value-description">
                    <a class="value-text bold">One of the core values of Swedbank</a>
                    <a class="value-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
                  </div>
                  </div>
                  <div class="value" id="value-caring">
                    <h3 class="value-title">Caring</h3>
                    <div class="value-description">
                      <a class="value-text">Cum enim libero quisquam rerum. Dolorfum fuga magnam nemo quae voluptas voluptates voluptatum.</a>
                      <ui-text-link linkto="#" text="Read more">
                    </div>
                  </div>
                  <div class="value" id="value-simple">
                    <h3 class="value-title">Simple</h3>
                    <div class="value-description">
                      <ui-text-blob text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></ui-text-blob>
                      <ui-text-blob text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></ui-text-blob>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- EVERYDAY BANKING VIEW -->
      <div class="everyday-banking-content">
        <div class="content-blocks">
          <h2 class="view-title">Everyday Banking</h2>
          <div class="blocks-wrapper">
            <div class="banking-container">
              <div class="banking-folders">
                <a data-folder="payments" class="banking-folder-item active">Payments</a>
                <a data-folder="calculator" class="banking-folder-item">Calculator</a>
              </div>
              <div class="banking">
                <div class="banking-wrapper">
                  <div class="payments-block">
                    <form onsubmit="console.log('submitted');" class="payments-form" action="#">
                      <div class="payments-form-rows">
                        <div class="payments-form-row">
                          <label for="payments-account">Account</label>
                          <div class="payments-input-container">
                            <select id="payments-account">
                              <option value="swedbank">Account name 1</option>
                              <option value="seb">Account name 2</option>
                              <option value="lhv">Account name 3</option>
                            </select>
                          </div>
                        </div>
                        <div class="payments-form-row">
                          <label for="payments-method">Saved payments</label>
                          <div class="payments-input-container">
                            <select id="payments-method">
                              <option value="swedbank">Swedbank</option>
                              <option value="seb">SEB</option>
                              <option value="lhv">LHV</option>
                            </select>
                          </div>
                        </div>
                        <div class="payments-form-row">
                          <label for="payments-amount">Amount</label>
                          <div class="payments-input-container">
                            <input type="number" id="payments-amount"/>
                            <select id="payments-currency">
                              <option value="eur">EUR</option>
                              <option value="usd">USD</option>
                              <option value="gbp">GBP</option>
                            </select>
                          </div>
                        </div>
                        <div class="payments-form-row">
                          <label for="payments-description">Description</label>
                          <div class="payments-input-container">
                            <input type="text" id="payments-description"/>
                          </div>
                        </div>
                      </div>
                      <div class="payments-form-buttons">
                        <ui-form-button color="turquoise" text="Save"></ui-form-button>
                        <ui-form-button color="orange" text="Pay"></ui-form-button>
                      </div>
                    </form>
                  </div>
                  <div class="calculator-block">
                    <div class="calculator-wrapper">
                      <div class="calculator-row loan">
                        <label>Loan size</label>
                        <div class="calculator-input-container">
                          <div class="current-value">
                            <span id="current-value"></span>
                          </div>
                          <input type="range" step="500" min="32000" max="320000" value="32000" class="loan-slider">
                          <div class="slider-values">
                            <span id="min-value"></span>
                            <span id="max-value"></span>
                          </div>
                        </div>
                      </div>
                      <div class="calculator-row period">
                        <label>Period</label>
                        <div class="calculator-input-container">
                          <select class="period-select">
                            <option value="10">10 years</option>
                            <option value="15">15 years</option>
                            <option value="20">20 years</option>
                            <option value="25">25 years</option>
                            <option value="30">30 years</option>
                          </select>
                        </div>
                      </div>
                      <div class="calculator-row interest">
                        <label>Interest</label>
                        <div class="calculator-input-container">
                          <select class="interest-select">
                            <option value="0.03">3%</option>
                            <option value="0.035">3.5%</option>
                            <option value="0.04">4%</option>
                            <option value="0.045">4.5%</option>
                            <option value="0.05">5%</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="result-wrapper">
                      <div class="result-payment">
                        <p class="result">Monthly payment</p>
                        <div class="result-total">
                          <span id="monthly-payment">0</span>
                          <span> EUR</span>
                        </div>
                      </div>
                      <div class="result-apply"> 
                        <ui-regular-button color="orange" text="Apply"></ui-regular-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="welcome">
              <div class="welcome-wrapper">
                <div class="yellow-bubble">
                  <p class="yellow-bubble-text">Hello world!</p>
                </div>
                <div class="welcome-text">
                  <h3 class="welcome-text-title">Welcome to Swedbank!</h3>
                  <p class="welcome-text-description">With 7.2 million private customers and more than 574 000 corporate and organisational customers. This makes us Sweden's largest bank in terms of number of customers and gives us a leading position in our other home markets of Estonia, Latvia, and Lithuania. As a major bank, we are a significant part of the financial system and play an important role in the local communities we serve. We are dedicated to helping our customers, our shareholders, and society as a whole stay financially sound and sustainable.</p>
                  <ui-text-link linkto="#" text="Read more"></ui-text-link>
                </div>
                <ui-regular-button color="orange" text="Go"></ui-regular-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    shadow.appendChild(homeTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.formValidation();
    this.sliderValues();
    this.activeFolder();
  }

  formValidation() {
    this.shadowRoot.querySelector('.payments-form').addEventListener('submit', (event) => {
      const paymentsAmountElement = this.shadowRoot.querySelector('#payments-amount');
      const paymentsAmount = paymentsAmountElement.value;

      if (isNaN(paymentsAmount) || paymentsAmount <= 0) {
        event.preventDefault();
        paymentsAmountElement.style.border = '1px solid red';

        const errorText = "Amount cant be empty and only accepts positive numbers!";
        alert(errorText);
        // const errorElement = paymentsAmountElement;
        // this.createErrorSpan(errorElement, errorText);
      }
    });
  }

  // I did not have enough time to implement the display of this properly
  // It only works properly on tablet (768px) and smaller, but in desktop it looks bad
  
  // createErrorSpan(errorElement, errorText) { // made this for checking other errors but there weren't other errors to check
  //   const existingErrorSpans = errorElement.parentNode.parentNode.querySelectorAll('.error');
  //   existingErrorSpans.forEach(span => span.remove());

  //   const errorSpan = document.createElement('span');
  //   errorSpan.textContent = errorText;
  //   errorSpan.style.color = 'red';
  //   errorSpan.classList.add('error');
  //   errorElement.parentNode.appendChild(errorSpan);
  //   return errorSpan;
  // }

  activeFolder() {
    const bankingFolders = this.shadowRoot.querySelectorAll('.banking-folder-item');

    bankingFolders.forEach(folder => {
      folder.addEventListener('click', () => {
        bankingFolders.forEach(folder => folder.classList.remove('active'));
        folder.classList.add('active');
        this.toggleContent();
      });
    });
  }

  toggleContent() {
    const folders = this.shadowRoot.querySelectorAll('.banking-folder-item');
    const paymentsContent = this.shadowRoot.querySelector('.payments-block');
    const calculatorContent = this.shadowRoot.querySelector('.calculator-block');
  
    folders.forEach(folder => {
      if (folder.classList.contains('active')) {
        const isPaymentsFolder = folder.getAttribute('data-folder') === 'payments';
        paymentsContent.style.display = isPaymentsFolder ? 'flex' : 'none';
        calculatorContent.style.display = isPaymentsFolder ? 'none' : 'flex';
      }
    });
  }

  sliderValues() {
    const slider = this.shadowRoot.querySelector('.loan-slider');
    const periodSelect = this.shadowRoot.querySelector('.period-select');
    const interestSelect = this.shadowRoot.querySelector('.interest-select');
    const minValue = this.shadowRoot.getElementById('min-value');
    const maxValue = this.shadowRoot.getElementById('max-value');
    const currentValue = this.shadowRoot.getElementById('current-value');
  
    minValue.textContent = slider.min + ' €';
    maxValue.textContent = slider.max + ' €';
    currentValue.textContent = slider.value + ' €';
  
    const updateValues = () => {
      currentValue.textContent = slider.value + ' €';
      this.calculateMonthlyPayment(slider.value, interestSelect.value, periodSelect.value);
    };
  
    slider.addEventListener('input', updateValues);
    periodSelect.addEventListener('change', updateValues);
    interestSelect.addEventListener('change', updateValues);
  }

  calculateMonthlyPayment(principal, annualInterestRate, loanPeriodInYears) {
    // since the Task Description pdf sends to a page with no specific formula, i used the "amortized loan formula"
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = loanPeriodInYears * 12;

    const monthlyPayment = (principal * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfPayments))) / (Math.pow((1 + monthlyInterestRate), numberOfPayments) - 1);
  
    const monthlyPaymentSpan = this.shadowRoot.getElementById('monthly-payment');
    monthlyPaymentSpan.textContent = monthlyPayment.toFixed(2) + ' €';
  
    return monthlyPayment;
  }
}

customElements.define('ui-home', HomeComponent);