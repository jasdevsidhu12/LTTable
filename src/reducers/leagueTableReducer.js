import { createStore } from 'redux';
import { LOADED_INITIAL_CONTENT } from '../api/ltConstant';

const initialState = { isInitialSetup: true };

export default function leagueTableReducer(state = initialState, action) {
    let stateData;
    switch(action.type) {
        case LOADED_INITIAL_CONTENT:
            console.log('reducer initial content');
            console.log(action);
            stateData = action.payload ;break;
        default: stateData = state;
    }
    return stateData;
}