import './app.css';
import AppHeader from "../app-header";
import SearchPannel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

function App() {

    const todoData = [
        { label: 'Drink coffee', important: false, id: 1 },
        { label: 'Make react App', important: true, id: 2 },
        { label: 'Have lunch', important: false, id: 3 },
    ];

    return (
        <div className="app row">
            <AppHeader toDo={3} done={0} />
            <SearchPannel/>
            <ItemStatusFilter />
            <TodoList todos={ todoData } />
        </div>
    );
}

export default App;
