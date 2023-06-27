/// <reference types="cypress" />
import TodoPage from '../support/pageObjects/TodoPage'

before(() => {
  cy.request('POST', '/reset', { todos: [] })
})
it('adds and removes todos', () => {
  const todoPage = new TodoPage()
  cy.visit('/')
  todoPage.addTodo('finish homework')
  todoPage.addTodo('feed Sparky')
  todoPage.getLengthOfTodos()
  todoPage.deleteLastTodo()
  todoPage.getLengthOfTodos()
})
