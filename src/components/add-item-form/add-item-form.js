import React, {Component} from 'react';
import './add-item-form.css';

export default class AddItemForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ' '
        });
    };

    render() {
        return (
            <form className="add-item-form col s12"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       onChange={this.onLabelChange}
                       placeholder="Add new task"
                       value={this.state.label}/>
                <button className="btn-floating waves-effect waves-light teal lighten-1 add-item-btn">
                    <i className="material-icons">add</i>
                </button>
            </form>
        )
    }
};