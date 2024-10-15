describe('Assert initial page load displays correct information', () => {
    it("Visits the app and asserts title exists", () => {
        cy.visit("http://localhost:5173/")
        cy.get('h1').should("contain", "Vite + React")
    });
    
    it("Visits the app and asserts react logo exists", () => {
        cy.visit("http://localhost:5173/")
        cy.get('button').should('be.visible').and("not.be.disabled")
    });
    
    it("Visits the app and clicks the button", () => {
        cy.visit("http://localhost:5173/")
        cy.get('button').click()
        cy.get('button').should('contain', 'count is 1')
    });
    
    it("Visits the app and mouseover the button", () => {
        cy.visit("http://localhost:5173/")
        cy.get('button').trigger('mouseover')
    });

    it("clicks button, reload, count should be 0", () => {
        cy.visit('http://localhost:5173')
        cy.get('button').click()
        cy.get('button').should('contain', 'count is 1')
        cy.reload()
        cy.get('button').should('contain', 'count is 0')
    })
});