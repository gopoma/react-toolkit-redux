import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PokemonApp } from './PokemonApp';
import { TodoApp } from "./TodoApp";

import { store } from "./store";
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <TodoApp/>
    </Provider>
  </React.StrictMode>,
);
