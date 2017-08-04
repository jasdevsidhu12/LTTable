import { LOADED_INITIAL_CONTENT } from '../api/ltConstant';
import { getSeasons, getTableStandings } from '../api/httpService';

export function loadLeagueTableContent(payload) {
    console.log('loadLeagueTableContent ');
    console.log(payload);
    return { type: LOADED_INITIAL_CONTENT, payload };
}

export function getLeagueTableData() {
    return (dispatch) => {
        getTableStandings().then((responseObject) => {
            dispatch(loadLeagueTableContent(responseObject));
        });
    }
}