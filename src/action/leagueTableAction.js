import { LOADED_INITIAL_CONTENT } from '../api/ltConstant';
import { getSeasons, getTableStandings, getInitialLeagueTableData } from '../api/httpService';

export function loadLeagueTableContent(payload) {
    console.log('action loadLeagueTableContent ');
    console.log(payload);
    return { type: LOADED_INITIAL_CONTENT, payload };
}

export function getLeagueTableData() {
    return (dispatch) => {
        getInitialLeagueTableData().then((responseObject) => {
            dispatch(loadLeagueTableContent(responseObject));
        });
    }
}