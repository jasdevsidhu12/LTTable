import { createStore } from 'redux';

const initialState = { isInitialSetup: true };

export default function leagueTableReducer(state = initialState, action) {
    console.log('leagueTableReducer');
    return state;
}