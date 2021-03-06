import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import LTHeader from './LTHeader.jsx';
import LTContent from './LTContent.jsx';
import LTOption from './LTOption.jsx';
import { getLeagueTableData } from '../action/leagueTableAction';
import '../resources/sass/style.scss';

const store = configureStore();
 
class LeagueTable extends Component {
    constructor() {
        super();
    }
    componentWillMount() {
        store.dispatch(getLeagueTableData());
    }
    render() {
        return (
            <div>
                <Provider store={ store }>
                    <div className="league-table-header">
                        <div>
                            <LTHeader />
                        </div>
                        <div className="league-table-canvas">
                            <LTOption />
                            <LTContent />
                        </div>
                    </div>
                </Provider>
            </div>
        );
    }
}
export default LeagueTable;