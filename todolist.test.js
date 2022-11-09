import TodoList from "./todolist";

test("menambahkan todo", () => {
  const todolist = new TodoList([]);

  todolist.add("Makan");

  expect(todolist.getAll()).toContain("Makan");
});

test("menghapus todo", () => {
  const todolist = new TodoList(["Belanja"]);

  todolist.remove(0);

  expect(todolist.getAll()).toBe([]);
});
