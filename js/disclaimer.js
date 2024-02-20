class DisclaimerComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const disclaimerTemplate = document.createElement('template');
    disclaimerTemplate.innerHTML = `
        <style>
          .disclaimer-content {
            display: flex;
            justify-content: center;
            padding: var(--disclaimer-padding);

            .disclaimer-text {
              max-width: 1200px;
              text-align: center;
              font-size: 14px;
              font-size: 0.875rem;
              font-weight: 300;
              line-height: 24px;
              margin: unset;
            }
          }
        </style>
        <div class="disclaimer-content">
          <p class="disclaimer-text">This is a website of companies offering financial services - Swedbank AS, Swedbank Liising AS, Swedbank P&C Insurance AS, Swedbank Life Insurance SE, and Swedbank Investeerimisfondid AS. Before entering into any agreement read the terms and conditions of the respective service. Consult a specialist, where necessary. Swedbank AS does not provide credit advisory for the pruposes of the Creditors and Credit Intermediaries Act. The borrower makes the decision of taking out a loan, who assesses the suitability of the loan product and contractual terms to his/her personal loan interest, need and financial situation on the basis of the information and warnings presented by the bank and is responsible for the consequences related to concluding the agreement.</p>
        </div>
      `;
    shadow.appendChild(disclaimerTemplate.content.cloneNode(true));
  }
}

customElements.define('ui-disclaimer', DisclaimerComponent);