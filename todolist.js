export default class TodoList {
  constructor(existingTodos) {
    this.existingTodos = existingTodos;
  }

  add(newTodo) {
    this.existingTodos.push(newTodo);
  }

  remove(index) {}

  getAll() {
    return this.existingTodos;
  }
}
