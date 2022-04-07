describe("tastedive APi", () => {
  let data = require("../fixtures/example");

  it("Testing API with data fixture", () => {
    for (let i = 0; i < data.length; i++) {
      cy.APItasteDive(data[i].name, data[i].type, data[i].limit).then(
        (response) => {
          expect(response.body.Similar.Info[0].Name.toLowerCase()).equal(
            data[i].name
          );
          expect(response.body.Similar.Info[0].Type).equal(data[i].type);
          for (let j = 0; j < response.body.Similar.Results.length; j++)
            expect(response.body.Similar.Results[j].Type).equal(data[i].type);
          expect(response.body.Similar.Results).lengthOf(data[i].limit);
        }
      );
    }
  });
});
