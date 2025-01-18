beforeEach(() => {
    cy.visit("http://zero.webappsecurity.com")// smoke test
  })


describe("Test suite",() => {

    it("Validate home page",() => {
        cy.get(".active > img").should("be.visible")
        // Primero ubica elemento y tras encontrar el elemento, verificara que sea visible
        cy.get('.active > .custom > h4').contains("Online Banking")

    })// Test case 1

    it("E2E Test - Funds transfer",() => {
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select("1")// De un spinner se pone como parametro el numero de posicion (empieza en 1 como opcion 1)
        cy.get('#tf_toAccountId').select("5")
        cy.get('#tf_amount').type("250")
        cy.get('#tf_description').should("be.visible")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').contains("You successfully submitted your transaction.")
    })// Test case 2

    /*it.only("Graphic update validation test",() => {// Test case 3
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()  
        cy.get('#money_map_tab > a').click()
        cy.get("#ext-sprite-1259").should("be.visible")
        cy.get("#ext-sprite-1165").click()
        cy.get("#ext-sprite-1259").should("not.be.visible")

    })*/
    // Only significa que correra solamente esa prueba

})