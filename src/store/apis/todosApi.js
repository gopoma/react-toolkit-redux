import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
    reducerPath: "todos",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos"
        }),
        getTodo: builder.query({
            query: (idTodo) => `/todos/${idTodo}`
        })
    })
});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;