import { createStore } from 'redux';
import { LOADED_INITIAL_CONTENT } from '../api/ltConstant';

const initialState = { isInitialSetup: true };

export default function leagueTableReducer(state = initialState, action) {
    let stateData;
    switch(action.type) {
        case LOADED_INITIAL_CONTENT:
            console.log('initial content');
            console.log(action);
            stateData = state ;break;
        default: stateData = state;
    }
    return stateData;
}