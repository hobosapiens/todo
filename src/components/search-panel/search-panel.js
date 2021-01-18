import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPannel extends Component {
    state = {
        search: ''
    };

    onSearchChange = (e) => {
        const search = e.target.value;
        this.setState({search});
        this.props.onSearchChange(search);
    };

    render() {
        return (
            <div className="search-panel col s6">
                <input type="text"
                       placeholder="Search"
                       value={this.state.search}
                       onChange={this.onSearchChange}/>
            </div>
        )
    }
};