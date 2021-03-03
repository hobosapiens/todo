import React from 'react';
import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {

    const emptyArray = todos !== 'undefined' && todos.length > 0;

    const todoItems = todos.map((item) => {

            const {id, ...itemProps} = item;

            return (
                <li key={id} className="list-group-item collection-item">
                    <TodoListItem {...itemProps}
                                  onDeleted={() => {
                                      onDeleted(id)
                                  }}
                                  onToggleImportant={() => {
                                      onToggleImportant(id)
                                  }}
                                  onToggleDone={() => {
                                      onToggleDone(id)
                                  }}/>
                </li>
            )
        }
    );

    const empty = <li className="list-group-item collection-item empty">Empty</li>;

    return (
        <div className="list-group col s12">
            <ul className="todo-list collection">
                {emptyArray ? todoItems : empty}
            </ul>
        </div>
    )
};

export default TodoList;