describe('testdive API test', () => {
    let data = require('../fixtures/example')
    
    it('Testing api using data from fixture', () => {
        cy.apiTastedive(data)
        .then(response => {
            expect(response.body.Similar.Info[0].Name.toLowerCase()).equal(data.name)
            expect(response.body.Similar.Info[0].Type).equal(data.type)
            for(let i=0;i<response.body.Similar.Results.length;i++)
            expect(response.body.Similar.Results[i].Type).equal(data.type)
        })        
    })
})
