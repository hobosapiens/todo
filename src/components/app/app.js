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
            this.createNewItem('Learn HTML', false, true),
            this.createNewItem('Learn CSS', false, true),
            this.createNewItem('Learn JavaScript', false, true),
            this.createNewItem('Learn Jquery', false, true),
            this.createNewItem('Learn React', true, true),
            this.createNewItem('Learn Redux', true, true),
            this.createNewItem('Find a job', true, false)
        ],
        search: '',
        filter: 'all'
    };

    getIndex(id) {
        return (
            this.state.todoData.findIndex((el) => el.id === id)
        )
    }

    createNewItem(label, important, done) {
        return {
            label: label,
            important: important,
            done: done,
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

    onSearchChange = (search) => {
        this.setState({search})
    };

    onFilterChange = (filter) => {
        this.setState({filter})
    };

    search = (items, filter) => {
        if (filter.length === 0) {
            return items;
        }
        return items.filter(el => {
            return el.label.toLowerCase().includes(filter.toLowerCase())
        });
    };

    filter = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'done':
                return items.filter(item => item.done);
            case 'active':
                return items.filter(item => !item.done);
            default:
                return items;
        }
    };

    render() {
        const {todoData, search, filter} = this.state;
        const done = todoData.filter(el => el.done).length;
        const toDo = todoData.length - done;
        const filteredItems = this.filter(
            this.search(todoData, search), filter);

        return (
            <div className="app row">
                <AppHeader toDo={toDo} done={done}/>
                <SearchPannel onSearchChange={this.onSearchChange}/>
                <ItemStatusFilter filter={this.state.filter} onFilterChange={this.onFilterChange}/>
                <TodoList todos={filteredItems}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}/>
                <AddItemForm onAddItem={this.addItem}/>
            </div>
        );
    }
};
