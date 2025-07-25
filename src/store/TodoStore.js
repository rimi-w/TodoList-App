import { create } from "zustand";

export const useTodoStore = create((set, get) => {
  return {
    todoList: [],
    todo: ``,
    isDone: false,
    date: new Date(),

    getTodoDate: () => {},

    getNewTodo: (e) => {
      set({ todo: e.target.value });
    },

    addTodo: () => {
      const todo = get().todo;
      const todoList = get().todoList;
      set({
        todoList: [
          ...todoList,
          { id: new Date(), payload: todo, isDone: false },
        ],
      });
    },

    deleteTodo: (todo) => {
      const todoList = get().todoList;
      set({ todoList: todoList.filter((el) => el.id !== todo.id) });
    },
  };
});
