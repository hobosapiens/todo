import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    };

    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    };

    render() {

        const {label, onDeleted} = this.props;
        const {done, important} = this.state;

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
                      onClick={ this.onLabelClick }>{label}
                </span>
                <button type="button"
                        className="btn transparent"
                        onClick={ this.onMarkImportant }>
                    <i className="material-icons">flash_on</i>
                </button>
                <button type="button"
                        className="btn red lighten-1"
                        onClick={ onDeleted }>
                    <i className="material-icons">cancel</i>
                </button>
            </div>
        )
    }
}
