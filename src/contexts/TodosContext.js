import React, {createContext, useReducer} from "react";
import {useLocalStorageReducer} from "../hooks/useLocalStorageReducer";
import reducer from "../reducers/todo.reducer";

const initialTodos = [{ id: 1, task: "Walk the dog", completed: true }];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider(props){
    const [todos, dispatch] = useLocalStorageReducer("todos", initialTodos, reducer);
    
    return(
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}