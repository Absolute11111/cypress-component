describe("Todolist - AlpineJS", () => {
  beforeEach(() => {
    cy.visit("/todolist/index.html");
  });

  it("Ajoute 4 todos, supprime la 2e, il en reste 3", () => {
    const todos = ["1", "2", "3", "4"];

    const typeTodo = (t) => {
      cy.get('input[type="text"], input')
        .first()
        .clear()
        .type(t)
        .type("{enter}");
    };
    todos.forEach(typeTodo);

    cy.get("ul").first().find("li").should("have.length", 4);

    cy.get("ul")
      .first()
      .find("li")
      .eq(1)
      .within(() => {
        cy.get('button, .delete, .remove, [aria-label="delete"]')
          .first()
          .click({ force: true })
          .then(null, () => {
            cy.get("svg, .cursor-pointer, .icon, .fa-times, .close")
              .first()
              .click({ force: true });
          });
      });

    cy.get("ul").first().find("li").should("have.length", 3);

    cy.get("ul")
      .first()
      .find("li")
      .then(($lis) => {
        const texts = [...$lis].map((li) => li.innerText.trim().slice(0, 1)); // prend le premier caractère (le chiffre)
        expect(texts).to.deep.equal(["1", "3", "4"]);
      });
  });
});
