import { createStore } from 'redux';
import {
    LOADED_INITIAL_CONTENT,
    LOADED_TEAM_MODAL_DATA,
    UNLOAD_TEAM_MODEL,
    LOADED_EXIST_TEAM_MODAL_DATA,
    LOADED_SEASON_STANDINGS_DATA
} from '../api/ltConstant';

const initialState = { isInitialSetup: true, teams: [], isOpenModal: false };

export default function leagueTableReducer(state = initialState, action={}) {
    let stateData;
    switch(action.type) {
        case LOADED_INITIAL_CONTENT:
            stateData = Object.assign({}, state, { isInitialSetup: false }, action.payload);
            break;
        case LOADED_TEAM_MODAL_DATA:
            state.teams.push(action.payload)
            stateData =
            Object.assign({}, state, {  teams: [...state.teams] },
            { isOpenModal: true });
            break;
        case UNLOAD_TEAM_MODEL:
            stateData = Object.assign({}, state, { isOpenModal: false });
            break;
        case LOADED_EXIST_TEAM_MODAL_DATA:
            stateData = Object.assign({}, state, { isOpenModal: true });
            break;
        case LOADED_SEASON_STANDINGS_DATA:
            stateData =
            Object.assign({}, state, { standings: action.payload.standings },
            { seasonName: action.payload.seasonName});
            break;
        default: stateData = state;
    }
    return stateData;
}