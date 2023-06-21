import { ButtonComponent } from "../../src/app/button/button.component"

describe('ButtonComponent.cy.ts', () => {
  it('should do something', () => {
    cy.mount(ButtonComponent);

    cy.get('p').should('have.text', 'button works!')
  })
});