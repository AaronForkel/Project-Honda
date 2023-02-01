  //Tests for visit Homepage (Honda) test.cy.js
    export function navigate() {
      cy.visit('https://powersports.honda.com/')
      cy.url().should('eq','https://powersports.honda.com/')
    };
    export function validateMainlogo() {
      cy.get('a[class=header-main-link]').click()
    };
    export function validateProductselement() {
      cy.get('#nav-products-tools').click({ force: true })
    };
    export function validateFindaDealerelement() {
      cy.get('div.util-dealer:nth-child(4) > a:nth-child(1)').click({ force: true })
      cy.reload()
      cy.wait(2000)
      cy.get('input[class=search-dealer-input]').click().clear().type('84009')
      cy.get('.finder-listing-list > :nth-child(1)').click()
      cy.get('.finder-detail-name').contains('Honda WORLD')
    };
    export function returnTohomepage() {
      cy.get('a[class=header-main-link]').click({ force: true })
    };
    export function validateOwnersupport() {
      cy.get('#nav-owner-support').click()
    };

    //Test for validatingRecallspage (Honda) test.cy.js
    export function validateRecallinfo() {
      cy.get('div[class=util-nav__recall]').click()
      cy.get('#filterTabsInput').click().type('MLHRH0152M5200149')
      cy.get('.filter-apply').click()
      cy.get('p[class=no-results').contains('0RESULTS FOUND.')
    };

    //Test for validatingRidereducation (Honda) test.cy
    export function validateRidereducation() {
      cy.get('#nav-rider-education').click()
      cy.contains('a', 'Rider Education').click()
      cy.get('a').contains('STREET').click()
      cy.contains('a', 'FIND A CLASS').should('be.visible').click()
      cy.get('input[name=zipCode]').click({force: true}).clear({force: true})
      cy.get('input[name=zipCode]').click({force: true}).type('84009')
      cy.get('button[class=rider-education__zip-search]').click()
      cy.get('.rider-education__item-accordion').contains('Salt Lake City Community College Salt Lake Community College West Side East Range, West Jordan, UT')
    };


    //Test for validatingProductsCBR650R (Honda) test.cy.js
    export function validateProductCBR650R() {
      cy.get('#nav-products-tools').click()
      cy.get('#section-20-18').click()
      cy.get('a[href="/motorcycle/sport/cbr650r"]').click()
      cy.url().should('eq', 'https://powersports.honda.com/motorcycle/sport/cbr650r')
      cy.get('div[class="mosaic-info-main"]').contains('CBR650R')
      cy.get('.mosaic-caption-text').contains('The 600 class is right where a lot of savvy sportbike riders land. Why? Six hundreds—especially inline fours like the CBR650R—just strike a near magical balance between power, weight, maneuverability and the human scale.')
    };

  //Test for searchbarValidation (Honda).cy
    export function searchbarValidation() {
      cy.get('button.util-search-open').click({force: true})
      cy.get('#searchMain').click().type('CBR650R{enter}')
      cy.xpath('//a[@href="https://powersports.honda.com/motorcycle/sport/cbr650r/?year=2023"]').click({force: true})
      cy.url().should('eq', 'https://powersports.honda.com/motorcycle/sport/cbr650r/?year=2023')
    };
