import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => { 
    const [idTodo, setIdTodo] = useState(1);

    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const { data: todo, isLoading, isFetching } = useGetTodoQuery(idTodo);

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isFetching: { (isFetching) ? "True" : "False" }</h4>

            <code>{JSON.stringify(todo)}</code><br/>

            <button 
                disabled={isLoading || idTodo === 1}
                onClick={() => setIdTodo(idTodo - 1)}
            >
                Previous Todo
            </button>
            <button 
                disabled={isLoading}
                onClick={() => setIdTodo(idTodo + 1)}
            >
                Next Todo
            </button>

            {/*<ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            <strong>{todo.completed ? "Done" : "Pending"}</strong>
                            {todo.title}
                        </li>
                    ))
                }
            </ul>*/}
        </>
    );
};