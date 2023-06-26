/// <reference types="cypress" />
import TodoPage from '../support/pageObjects/todoPage'

const todoPage = new TodoPage()
before(() => {
  cy.request('POST', '/reset', { todos: [] })
})
it('adds and removes todos', () => {
  cy.visit('/')
  todoPage.addTodo('finish homework')
  todoPage.addTodo('feed Sparky')
  todoPage.getLengthOfTodos()
  todoPage.deleteLastTodo()
  todoPage.getLengthOfTodos()
})
