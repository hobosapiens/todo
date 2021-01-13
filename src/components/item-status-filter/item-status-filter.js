import React, { Component } from 'react';
import './item-status-filter.css';

export default  class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="item-status-filter col s6">
                <button type="button"
                        className="btn transparent active">All
                </button>
                <button type="button"
                        className="btn transparent">Active
                </button>
                <button type="button"
                        className="btn transparent">Done
                </button>
            </div>
        )
    }
}