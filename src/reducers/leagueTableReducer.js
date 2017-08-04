import { createStore } from 'redux';

const initialState = { isInitialSetup: true };

export function leagueTableReducer(state = initialState, action) {
    return { ...state };
}