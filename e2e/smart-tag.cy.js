describe("Smart Tag (hover tooltip)", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/components/smart-tag.html");
  });

  it("Le tag n'est pas visible au chargement", () => {
    cy.contains("Lorem ipsum dolor sit amet").should("not.be.visible");
  });

  it("Le tag apparaît au survol du bouton 'See more'", () => {
    cy.contains("See more").trigger("mouseover");
    cy.contains("Lorem ipsum dolor sit amet").should("be.visible");
  });

  it("Le tag disparaît quand on quitte le survol du bouton 'See more'", () => {
    cy.contains("See more").trigger("mouseover");
    cy.contains("Lorem ipsum dolor sit amet").should("be.visible");

    cy.contains("See more").trigger("mouseout");

    cy.wait(200);
    cy.contains("Lorem ipsum dolor sit amet").should("not.be.visible");
  });
});
