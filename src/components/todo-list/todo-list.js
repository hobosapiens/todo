import React from 'react';
import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ({todos}) => {
    const todoItems = todos.map((item, index) => {

            const { id, ...itemProps } = item;

            return (
                <li key={id} className="list-group-item collection-item">
                    <TodoListItem { ...itemProps } />
                </li>
            )
        }
    );

    return (
        <div className="list-group col s12">
            <ul className="todo-list collection">
                {todoItems}
            </ul>
        </div>
    )
};

export default TodoList;