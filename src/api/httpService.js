import axios from 'axios';
import { tokenAPI } from './ltConstant';

export function sendRequest(apiRequestURL) {
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
            const result = respArray.map((obj) => {
                return { competition_id: obj.id, name: obj.name }
            });
            resolve(result);
        });
    });
}

export function getSeasons() {
    const apiRequestURL =
    `https://api.soccerama.pro/v1.2/seasons?api_token=${tokenAPI}`;
    return new Promise((resolve) => {
        sendRequest(apiRequestURL).then((respArray) => {
            const result = respArray.map((obj) => {
                return { competition_id: obj.competition_id, season_id: obj.id, name: obj.name }
            });
            resolve(result);
        });
    });
}

export function getTableStandings(seasonID = 741) {
    const apiRequestURL =
    `https://api.soccerama.pro/v1.2/standings/season/${seasonID}?api_token=${tokenAPI}`;
    return new Promise((resolve) => {
        sendRequest(apiRequestURL).then((respArray) => {
            let result = respArray.map((obj) => {
                return {
                    competition_id: obj.competition_id,
                    season_id: obj.season_id,
                    name: obj.name,
                    standings: obj.standings.data,
                    groups: obj.groups.data
                }
            });
            result = Object.assign({}, result[0]);
            console.log('----------result----------');
            console.log(result);
            result.standings = result.standings.map((obj) => {
                return {
                    position: obj.position,
                    team_name: obj.team.name,
                    team_logo: obj.team.logo,
                    team_id: obj.team.id,
                    group_name: obj.group,
                    played: (obj.home_played + obj.away_played),
                    won: (obj.home_win + obj.away_win),
                    draw: (obj.home_draw + obj.away_draw),
                    loose: (obj.home_loose + obj.away_loose),
                    goal_difference: obj.goal_difference,
                    points: obj.points
                };
            });
            // result.groups = result.groups.filter((obj) => {
            //     console.log(obj);
            //     obj.teams.data && obj.teams.data.length > 1
            // });
            // console.log('*****result*******');
            // console.log(result);
            resolve(result);
        });
    });
}

export function getInitialLeagueTableData() {
    const result = {};
    return new Promise((resolve) => {
        getCompetitions().then((respArray) => {
            result.competition = respArray;
            getSeasons().then((respArray) => {
                result.season = respArray;
                const seassonID = result.season[0].season_id;
                getTableStandings(seassonID).then((respArray) => {
                    result.standings =  respArray;
                    resolve(result);
                });
            });
        });
    });
}

export function getTeamInformation(teamID) {
    const apiRequestURL = `https://api.soccerama.pro/v1.2/players/team/${teamID}?api_token=${tokenAPI}`;
     return new Promise((resolve) => {
        sendRequest(apiRequestURL).then((respArray) => {
            const result = respArray.map((obj) => {
                return {
                    name: obj.name,
                    fullName: obj.fullname,
                    nationality: obj.nationality,
                    birth_date: obj.birth_date,
                    height: obj.height,
                    weight: obj.weight,
                    shirt_number: obj.shirt_number,
                    img: obj.photo
                }
            });
            const newResult = Object.assign({}, { team: [result] }, { team_id: teamID });
            resolve(newResult);
        });
    });
}