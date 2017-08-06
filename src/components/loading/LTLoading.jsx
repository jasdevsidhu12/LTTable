import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img from '../../resources/img/loading.gif';

class LTLoading extends Component {
    constructor() {
        super();
        this._arrayOfRows = [];
    }
    render() {
        return (
            <div className="league-table-loading-comp">
                <span>
                    <img src={img} /> Loading ....
                </span>
            </div>
        );
    }
}
export default LTLoading;