import { createContext, useContext } from "react";

export const TodoContext = createContext({
  // values or properties
  todos: [
    {
      id: 1,
      todo: "todo msg",
      completed: false,
    },
  ],
  //   functionality or method
  addTodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
