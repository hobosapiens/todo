import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const {label, done, important, onDeleted, onToggleImportant, onToggleDone} = this.props;

        let className = 'todo-list-item';

        if(done) {
            className += ' done'
        }

        if(important) {
            className += ' important'
        }

        return (
            <div className={className}>
                <span className="todo-list-item-label"
                      title={label}
                      onClick={ onToggleDone }>{label}
                </span>
                <button type="button"
                        className="btn transparent"
                        onClick={ onToggleImportant }>
                    <i className="material-icons">flash_on</i>
                </button>
                <button type="button"
                        className="btn red lighten-2"
                        onClick={ onDeleted }>
                    <i className="material-icons">close</i>
                </button>
            </div>
        )
    }
}
