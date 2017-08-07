import leagueTableReducer from '_reducers/leagueTableReducer';
import {
    LOADED_INITIAL_CONTENT,
    LOADED_TEAM_MODAL_DATA,
    UNLOAD_TEAM_MODEL,
    LOADED_EXIST_TEAM_MODAL_DATA,
    LOADED_SEASON_STANDINGS_DATA
} from '_api/ltConstant';


describe('Tests on leagueTableReducer', () => {
    let initialState;
    beforeEach(() => {
        initialState = {
            isInitialSetup: true,
            teams: [],
            isOpenModal: false
        }
    });
    it('should have an output state when the case is default', () => {
        const result = leagueTableReducer();
        expect(result.isInitialSetup).toBe(initialState.isInitialSetup, 'isInitialSetup should be true');
        expect(result.isOpenModal).toBe(initialState.isOpenModal, 'isOpenModal should be false');
        expect(result.teams.length).toBe(initialState.teams.length, 'teams should be []');
    });
    it('should have a respective output state when the case is LOADED_INITIAL_CONTENT', () => {
        const action =
        { 
            type: LOADED_INITIAL_CONTENT,
            payload: { standings: [] }
        };
        const result = leagueTableReducer(initialState, action);
        expect(result.isInitialSetup).toBe(!initialState.isInitialSetup, 'isInitialSetup should be false');
        expect(result.standings.length).toEqual(action.payload.standings.length);
    });
    it('should have a respective output state when the case is LOADED_TEAM_MODAL_DATA', () => {
        initialState.teams.push({ name: 'chelsea', players:[] });
        const action =
        { 
            type: LOADED_TEAM_MODAL_DATA,
            payload: { name: 'arsenal', players:[] }
        };
        const result = leagueTableReducer(initialState, action);
        expect(result.isOpenModal).toEqual(true, 'isOpenModal should be true');
        expect(result.teams.length).toEqual(2, 'array teams should have 2 objects');
    });
    it('should have a respective output state when the case is UNLOAD_TEAM_MODEL', () => {
        initialState.isOpenModal = true;
        const action =
        { 
            type: UNLOAD_TEAM_MODEL
        };
        const result = leagueTableReducer(initialState, action);
        expect(result.isOpenModal).toEqual(false, 'isOpenModal should be false');
    });
});