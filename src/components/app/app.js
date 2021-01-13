import './app.css';
import React, {Component} from 'react';
import AppHeader from "../app-header";
import SearchPannel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink coffee', important: false, id: 1},
            {label: 'Make react App', important: true, id: 2},
            {label: 'Have lunch', important: false, id: 3},
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id);

            const newTodoData = [
                ...todoData.slice(0, index),
                ...todoData.slice(index + 1)
            ];

            return {
                todoData: newTodoData
            }
        })
    };

    render() {
        const {todoData} = this.state;

        return (
            <div className="app row">
                <AppHeader toDo={3} done={0}/>
                <SearchPannel/>
                <ItemStatusFilter/>
                <TodoList todos={todoData}
                          onDeleted={this.deleteItem}/>
            </div>
        );
    }
};
