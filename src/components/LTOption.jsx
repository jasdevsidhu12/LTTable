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
        this.getSeasonData = this.getSeasonData.bind(this);
        this.seasonID = '';
    }

    getSeasonData(seasonID, seasonName) {
        this.seasonID = seasonID;
        this.props.getSeasonStandingData(seasonID, seasonName);
    }

    getAllSeasons(competitionID) {
        const allSeasons =
        this.props.seasons.filter((obj) => obj.competition_id === competitionID );
        return allSeasons;
    }
    renderOptionContent() {
        if (!this.props.isInitialSetup) {
            const competitionName = this.props.competitionName;
            const seasonName = this.props.seasonName;
            let allSeasons = [];
            allSeasons = this.getAllSeasons(this.props.standings.competition_id);
            return (
                <div>
                    <div className="league-table-option-headings">
                        <span>
                            { competitionName + ' ' + seasonName }
                        </span>
                    </div>
                    <div className="league-table-dropdown-panel">
                        <div className="league-table-float-left">
                            Change Season
                        </div>
                        <div className="league-table-float-left">
                            <LTDropDown setSeasonID={this.getSeasonData} content={allSeasons} />
                        </div>
                    </div>
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
    return {
        isInitialSetup: state.leagueTableReducer.isInitialSetup,
        competitionName: state.leagueTableReducer.competitionName,
        seasonName: state.leagueTableReducer.seasonName,
        seasons: state.leagueTableReducer.season,
        standings: state.leagueTableReducer.standings
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ getSeasonStandingData }, dispatch);
}
export default connect(mapStatetoProps, matchDispatchToProps)(LTOption);
