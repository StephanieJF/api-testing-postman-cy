class TodoPage {
  addTodo(item) {
    cy.get('.new-todo').type(item + '{enter}')
  }

  getLengthOfTodos() {
    cy.get('[data-cy="remaining-count"]')
      .invoke('text')
      .then((count) => {
        cy.get('.todo-list li').should('have.length', count)
      })
  }

  deleteLastTodo() {
    cy.get('.todo-list li').last().find('.destroy').click({ force: true })
  }
}

export default TodoPage
