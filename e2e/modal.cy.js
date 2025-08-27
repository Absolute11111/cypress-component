describe("Fenêtre modale", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/components/modal.html");
  });

  it("Ouvre la fenêtre modale au clic sur Display", () => {
    cy.contains("Display").click();
    cy.get("h2").should("contain.text", "Lorem Ipsum");
  });

  it("Ferme la modale quand on clique en dehors", () => {
    cy.contains("Display").click();

    cy.get(".fixed.bg-black").click({ force: true });
    cy.get("h2").should("not.exist");
  });

  it("Vérifie que la fenêtre contient un h2 Lorem Ipsum", () => {
    cy.contains("Display").click();
    cy.get("h2").should("have.text", "Lorem Ipsum");
  });
});
