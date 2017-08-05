import { LOADED_INITIAL_CONTENT, UNLOAD_TEAM_MODEL, LOADED_TEAM_MODAL_DATA } from '../api/ltConstant';
import { getInitialLeagueTableData, getTeamInformation } from '../api/httpService';

function loadLeagueTableContent(payload) {
    console.log('action loadLeagueTableContent ');
    console.log(payload);
    return { type: LOADED_INITIAL_CONTENT, payload };
}

function loadTeamModalData(payload) {
    console.log('action loadTeamModalData');
    console.log(payload);
    return { type: LOADED_TEAM_MODAL_DATA, payload };
}

export function getLeagueTableData() {
    return (dispatch) => {
        getInitialLeagueTableData().then((responseObject) => {
            dispatch(loadLeagueTableContent(responseObject));
        });
    }
}

export function getTeamModalData(teamID, teamLogo) {
    return (dispatch) => {
        getTeamInformation(teamID).then((responseObject) => {
            console.log('getTeamModalData');
            console.log(responseObject);
            dispatch(loadTeamModalData(responseObject));
        });
    }
}

export function unLoadTeamModelContent() {
    return { type: UNLOAD_TEAM_MODEL };
}