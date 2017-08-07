import {
    LOADED_INITIAL_CONTENT,
    UNLOAD_TEAM_MODEL,
    LOADED_TEAM_MODAL_DATA,
    LOADED_EXIST_TEAM_MODAL_DATA,
    LOADED_SEASON_STANDINGS_DATA
} from '../api/ltConstant';
import { getInitialLeagueTableData, getTeamInformation, getTableStandings } from '../api/httpService';
import isCurrentTeamExist from '../api/ltUtils';

export function loadLeagueTableContent(payload) {
    return { type: LOADED_INITIAL_CONTENT, payload };
}

function loadTeamModalData(payload) {
    return { type: LOADED_TEAM_MODAL_DATA, payload };
}

function loadExistTeamModalData() {
    return { type: LOADED_EXIST_TEAM_MODAL_DATA };
}

function loadSeasonStandingsData(payload) {
    return { type: LOADED_SEASON_STANDINGS_DATA, payload }
}

export function unLoadTeamModelContent() {
    return { type: UNLOAD_TEAM_MODEL };
}

export function getLeagueTableData() {
    return (dispatch) => {
        getInitialLeagueTableData().then((responseObject) => {
            dispatch(loadLeagueTableContent(responseObject));
        });
    }
}

export function getSeasonStandingData(seasonID, seasonName) {
    return (dispatch) => {
        getTableStandings(seasonID).then((responseObject) => {
            const newRespObj = Object.assign({}, { standings: responseObject }, { seasonName });
            dispatch(loadSeasonStandingsData(newRespObj));
        });
    }
}

export function getTeamModalData(teamID, teams=[]) {
    return (dispatch) => {
        if (isCurrentTeamExist(teamID, teams)) {
            dispatch(loadExistTeamModalData());
        } else {
            getTeamInformation(teamID).then((responseObject) => {
                dispatch(loadTeamModalData(responseObject));
            });
        }
    }
}