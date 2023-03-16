


describe('Teste Home Page - Login', ()=> {
    it('Realizar Login com sucesso', ()=> {
        cy.viewport(1920, 1080)
        cy.visit('https://my.bible.com/pt')
        cy.get('.yv-profile-menu-button-container > .yv-button').click()
        cy.get('[href="/pt/sign-in"] > span').click()
        cy.get('#signin-username').type('danielotavianosantos@gmail.com')
        cy.get('#signin-password').type('Biblia123!')
        cy.get(':nth-child(8) > .solid-button').click()
        cy.get('.yv-notification-wrapper').should('be.visible')


    })
})