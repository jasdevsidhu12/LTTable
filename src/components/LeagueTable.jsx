import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LTHeader from './LTHeader.jsx';
import LTContent from './LTContent.jsx';
import LTOption from './LTOption.jsx';
 
class LeagueTable extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                kkk
                <LTOption />
                <LTHeader />
                <LTContent />
            </div>
        );
    }
}
export default LeagueTable;