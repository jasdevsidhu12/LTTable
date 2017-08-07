import { LOADED_INITIAL_CONTENT } from '_api/ltConstant'
import { loadLeagueTableContent } from '_action/leagueTableAction';

describe('leagueTableAction "action creators"', () => {
    it('should return the respective content from loadLeagueTableContent', () => {
        const payload = { data: {} };
        loadLeagueTableContent(payload);
        expect(loadLeagueTableContent(payload).type).toBe(LOADED_INITIAL_CONTENT);
        expect(loadLeagueTableContent(payload).payload).toBe(payload);
    });
});
