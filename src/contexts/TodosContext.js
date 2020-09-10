import React, {createContext, useReducer} from "react";
import reducer from "../reducers/todo.reducer"
import useTodoState from "../hooks/useTodoState";

const initialTodos = [{ id: 1, task: "Walk the dog", completed: true }];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider(props){
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    
    return(
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}