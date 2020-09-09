import React, {createContext} from "react";
import useTodoState from "../hooks/useTodoState";

const initialTodos = [{ id: 1, task: "Walk the dog", completed: true }];

export const TodosContext = createContext();
export function TodoProvider(props){
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
        initialTodos
      );
    return(
        <TodosContext.Provider value={{todos, addTodo, removeTodo, toggleTodo, editTodo}}>
            {props.children}
        </TodosContext.Provider>
    )
}