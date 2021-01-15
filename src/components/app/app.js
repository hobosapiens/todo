import './app.css';
import React, {Component} from 'react';
import AppHeader from "../app-header";
import SearchPannel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItemForm from "../add-item-form";

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            this.createNewItem('Drink coffee'),
            this.createNewItem('Make react App'),
            this.createNewItem('Have lunch')
        ]
    };

    getIndex(id) {
        return (
            this.state.todoData.findIndex((el) => el.id === id)
        )
    }

    createNewItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const index = this.getIndex(id);
            const newTodoData = [
                ...todoData.slice(0, index),
                ...todoData.slice(index + 1)
            ];
            return {
                todoData: newTodoData
            }
        })
    };

    addItem = (text) => {
        const newItem = this.createNewItem(text);
        this.setState(({todoData}) => {
            const newTodoData = [
                ...todoData, newItem
            ];
            return {
                todoData: newTodoData
            }
        })
    };

    toggleProperty(arr, id, propName) {
        const index = this.getIndex(id);

        const oldItem = arr[index];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ]
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => ({
            todoData: this.toggleProperty(todoData, id, 'done')
        }));
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => ({
            todoData: this.toggleProperty(todoData, id, 'important')
        }));
    };

    render() {
        const {todoData} = this.state;
        const done = todoData.filter(el => el.done).length;
        const toDo = todoData.length - done;

        return (
            <div className="app row">
                <AppHeader toDo={toDo} done={done}/>
                <SearchPannel/>
                <ItemStatusFilter/>
                <TodoList todos={todoData}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}/>
                <AddItemForm onAddItem={this.addItem}/>
            </div>
        );
    }
};
