import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSeasonStandingData } from '../action/leagueTableAction';
import LTLoading from './loading/LTLoading';
import LTDropDown from './dropdown/LTDropDown.jsx';

class LTOption extends Component {
    constructor() {
        super();
        this.renderOptionContent = this.renderOptionContent.bind(this);
        this.getAllSeasons = this.getAllSeasons.bind(this);
        this.setSeasonID = this.setSeasonID.bind(this);
        this.seasonID = '';
    }

    setSeasonID(seasonID) {
        console.log('season id : ' + seasonID);
        this.seasonID = seasonID;
        this.props.getSeasonStandingData(seasonID);
    }

    getAllSeasons(competitionID) {
        const allSeasons =
        this.props.seasons.filter((obj) => obj.competition_id === competitionID );
        return allSeasons;
    }
    renderOptionContent() {
        if (!this.props.isInitialSetup) {
            const competitionName = this.props.standings.name;
            let allSeasons = [];
            allSeasons = this.getAllSeasons(this.props.standings.competition_id);
            console.log('all seasons');
            console.log(allSeasons);
            return (
                <div>
                    <h1> { competitionName } </h1>
                    <LTDropDown setSeasonID={this.setSeasonID} content={allSeasons} type={'seasons'}/>
                    <button>Get Season Team Standings</button>
                </div>
            );
            
        }
        return (<LTLoading />);
    }
    render() {
        return (
            <div>
                { this.renderOptionContent() }
            </div>
        );
    }
}

LTOption.propTypes = {
    isInitialSetup: PropTypes.bool,
    competitions : PropTypes.array,
    seasons: PropTypes.array,
    standings: PropTypes.object
}


function mapStatetoProps(state) {
    console.log('mapStatetoProps LTOption');
    console.log(state);
    return {
        isInitialSetup: state.leagueTableReducer.isInitialSetup,
        competitions: state.leagueTableReducer.competition,
        seasons: state.leagueTableReducer.season,
        standings: state.leagueTableReducer.standings
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ getSeasonStandingData }, dispatch);
}
export default connect(mapStatetoProps, matchDispatchToProps)(LTOption);
