import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTeamModalData, unLoadTeamModelContent } from '../action/leagueTableAction';
import LTLoading from './loading/LTLoading';
import LTTable from './table/LTTable';
import LTTeamModal from './modal/LTTeamModal.jsx';

class LTContent extends Component {
    constructor() {
        super();
        this.renderLeagueTableContent = this.renderLeagueTableContent.bind(this);
        this.getTeamData = this.getTeamData.bind(this);
        this.renderModalTeamContent = this.renderModalTeamContent.bind(this);
        this.closeModalTeamContent = this.closeModalTeamContent.bind(this);
        this.selectedTeamID = '';
    }

    getTeamData(teamID, teamLogo) {
        this.selectedTeamID = teamID;
        this.props.getTeamModalData(teamID);
    }

    closeModalTeamContent() {
        this.props.unLoadTeamModelContent();
    }

    renderLeagueTableContent() {
        const propStandings = this.props.standingsArray;
        let table = {}
        if (propStandings) {
            table = { table: propStandings.standings };
            return (<LTTable standings={ table } getTeamData={ this.getTeamData }/>);
        }
       return (<LTLoading />);
    }

    renderModalTeamContent() {
        let selectedTeam = {};
        console.log('selected team id ' + this.selectedTeamID);
        if (this.props.isTeamModelOpen) {
            console.log('+++teams+++');
            console.log(this.props.teams);
            selectedTeam = this.props.teams.find((obj) => {
                return obj.team_id === this.selectedTeamID;
            });
        }
        return (
            <LTTeamModal selectedTeam = { selectedTeam }
            isOpen={this.props.isTeamModelOpen}
            closeModalTeamContent={this.closeModalTeamContent} />
        );
    }

    render() {
        return (
            <div>
                <div className="table-size">
                    { this.renderLeagueTableContent() }
                </div>
                { this.renderModalTeamContent() }
            </div>
        );
    }
}
LTContent.propTypes = {
    standings : PropTypes.array,
    teams: PropTypes.array,
    isTeamModelOpen: PropTypes.bool
}

function mapStatetoProps(state) {
    console.log('---State---');
    console.log(state);
    return {
        standingsArray: state.leagueTableReducer.standings,
        teams: state.leagueTableReducer.teams,
        isTeamModelOpen: state.leagueTableReducer.isOpenModal
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ getTeamModalData, unLoadTeamModelContent }, dispatch);
}
export default connect(mapStatetoProps, matchDispatchToProps)(LTContent);
