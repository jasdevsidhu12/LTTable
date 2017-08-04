import axios from 'axios';
import { tokenAPI } from './ltConstant';

export function sendRequest(apiRequestURL) {
    console.log('Inside sendRequest Method');
    return new Promise((resolve) => {
        axios.get(apiRequestURL).then(res => {
            resolve(res.data.data);
      });
    });
}

export function getCompetitions() {
    const apiRequestURL =
    `https://api.soccerama.pro/v1.2/competitions?api_token=${tokenAPI}`;
    return new Promise((resolve) => {
        sendRequest(apiRequestURL).then((respArray) => {
            // console.log('Successfully retrieve data');
            // console.log(respArray);
            
            const result = respArray.map((obj) => {
                return { competition_id: obj.id, name: obj.name }
            });
            // console.log(result);
            resolve(result);
        });
    });
}

export function getSeasons() {
    const apiRequestURL =
    `https://api.soccerama.pro/v1.2/seasons?api_token=${tokenAPI}`;
    return new Promise((resolve) => {
        sendRequest(apiRequestURL).then((respArray) => {
            // console.log('Successfully retrieve data');
            // console.log(respArray);
            
            const result = respArray.map((obj) => {
                return { competition_id: obj.competition_id, season_id: obj.id, name: obj.name }
            });
            // console.log(result);
            resolve(result);
        });
    });
}

export function getTableStandings(seasonID = 741) {
    const apiRequestURL =
    `https://api.soccerama.pro/v1.2/standings/season/${seasonID}?api_token=${tokenAPI}`;
    return new Promise((resolve) => {
        sendRequest(apiRequestURL).then((respArray) => {
            // console.log('Successfully retrieve data');
            let result = respArray.map((obj) => {
                return {
                    competition_id: obj.competition_id,
                    season_id: obj.id,
                    name: obj.name,
                    standings: obj.standings.data
                }
            });
            result = result[0];
            // console.log(result);
            result.standings = result.standings.map((obj) => {
                return {
                    position: obj.position,
                    team_name: obj.team.name,
                    team_logo: obj.team.logo,
                    team_id: 152,
                    played: (obj.home_played + obj.away_played),
                    won: (obj.home_win + obj.away_win),
                    draw: (obj.home_draw + obj.away_draw),
                    loose: (obj.home_loose + obj.away_loose)
                };
            });
            // console.log(result);
            resolve(result);
        });
    });
}