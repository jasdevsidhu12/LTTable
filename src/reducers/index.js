import { combineReducers } from 'redux';
import leagueTableReducer from './leagueTableReducer';

const rootReducer = combineReducers({ leagueTableReducer });
export default rootReducer;