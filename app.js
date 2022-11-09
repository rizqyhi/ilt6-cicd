import TodoList from "./todolist";

const todolist = new TodoList(["Makan", "Belanja", "Main game"]);

todolist.getAll().forEach((todo) => {
  document.querySelector("#todo").innerHTML += `<li>${todo}</li>`;
});
