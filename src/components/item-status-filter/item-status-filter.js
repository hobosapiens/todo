import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = () => {
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
};

export default ItemStatusFilter;