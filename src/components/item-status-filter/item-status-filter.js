import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'all'},
        {name: 'active', label: 'active'},
        {name: 'done', label: 'done'}
    ];

    render() {

        const buttons = this.buttons.map(({name, label}) => {
        const isActive = this.props.filter === label;
        return (
            <button type="button"
                    className={`btn transparent ${ isActive && 'active' }`}
                    key={name}
                    onClick={() => {
                        this.props.onFilterChange(name)
                    }}>{label}
            </button>
        )
        });

        return (
            <div className="item-status-filter col s6">
                {buttons}
            </div>
        )
    }
}