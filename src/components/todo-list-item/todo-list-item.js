import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => {

    const style = {
        color: important ? '#26a69a' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <div className="todo-list-item">
            <span className="todo-list-item-label"
                  style={style}>{label}
            </span>
            <button type="button"
                    className="btn transparent">
                <i className="material-icons">flash_on</i>
            </button>
            <button type="button"
                    className="btn red lighten-1">
                <i className="material-icons">cancel</i>
            </button>
        </div>
    )
};

export default TodoListItem;
