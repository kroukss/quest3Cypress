Cypress.Commands.add('apiTastedive', (query) => {
    cy.request({
        url: `https://tastedive.com/api/similar?q=${query.name}&limit=${query.limit}`
    }) 
}) 

