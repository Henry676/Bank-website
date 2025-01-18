beforeEach(() =>{
    cy.visit("https://opensource-demo.orangehrmlive.com/")
})

describe("Test suite", () => {

    it("Validate icon",() =>{
        cy.get('.orangehrm-login-branding > img').should("be.visible")
    })

    it("Validate username field",() =>{
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible")
    })

    it("Validate website version",() =>{
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should("be.visible")
    })
    it("Validate login button",() =>{
        cy.get('.oxd-button').should("be.visible")
    })
    

})