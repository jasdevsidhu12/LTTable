import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LTLoading from './loading/LTLoading';
import LTTable from './table/LTTable';
import { ltColumns } from '../api/ltConstant';

class LTContent extends Component {
    constructor() {
        super();
        this.renderLeagueTableContent = this.renderLeagueTableContent.bind(this);
    }

    renderLeagueTableContent() {
        console.log('props');
        console.log(this.props.standingsArray);
        return this.props.standingsArray ? (<LTTable />): (<LTLoading />);
    }
    render() {
        return (
            <div>
                { this.renderLeagueTableContent() }
            </div>
        );
    }
}
LTContent.propTypes = {
    standings : PropTypes.array
}

function mapStatetoProps(state) {
    console.log('---State---');
    console.log(state);
    return { standingsArray: state.leagueTableReducer.standings}
}
export default connect(mapStatetoProps)(LTContent);
