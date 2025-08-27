describe("Scroll to Top Button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/components/scroll-to-top.html");
  });

  it("Le bouton scroll-to-top apparait quand on scrolle vers le bas", () => {
    cy.get(".fixed.bottom-3.right-3").should("not.be.visible");

    cy.scrollTo("bottom");
    cy.wait(500);

    cy.get(".fixed.bottom-3.right-3").should("be.visible");
  });

  it("Clique sur le bouton ramène en haut de la page et le bouton disparait", () => {
    cy.scrollTo("bottom");
    cy.wait(500);
    cy.get(".fixed.bottom-3.right-3").should("be.visible");

    cy.get(".fixed.bottom-3.right-3 button").click();
    cy.wait(1000);

    cy.window().its("scrollY").should("eq", 0);

    cy.get(".fixed.bottom-3.right-3").should("not.be.visible");
  });
});
