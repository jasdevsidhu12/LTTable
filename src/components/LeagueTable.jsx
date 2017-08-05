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
console.log(store);
 
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
                    <div>
                        <LTOption />
                        <LTHeader />
                        <LTContent />
                    </div>
                </Provider>
            </div>
        );
    }
}
export default LeagueTable;