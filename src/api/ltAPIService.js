import { tokenAPI, hostname } from './ltConstant';
import img from '../resources/img/playerIcon.png';
import sendRequest from './httpService';

function getComptitionName(competitionID, competitions) {
    const competition = competitions.find((obj) => {
        if (obj.competition_id === competitionID) {
            return obj.name;
        }
    });
    return competition.name;
}

export function getCompetitions() {
    const apiRequestURL = `${hostname}/competitions?api_token=${tokenAPI}`;
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
    const apiRequestURL = `${hostname}/seasons?api_token=${tokenAPI}`;
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
    const apiRequestURL = `${hostname}/standings/season/${seasonID}?api_token=${tokenAPI}`;
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
                result.seasonName = result.season[0].name;
                const seassonID = result.season[0].season_id;
                result.competitionName = getComptitionName(result.season[0].competition_id, result.competition);
                getTableStandings(seassonID).then((respArray) => {
                    result.standings =  respArray;
                    resolve(result);
                });
            });
        });
    });
}

export function getTeamInformation(teamID) {
    const apiRequestURL = `${hostname}/players/team/${teamID}?api_token=${tokenAPI}`;
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
                    img:
                    (obj.photo && obj.photo !== '') ? obj.photo : img
                }
            });
            const newResult = Object.assign({}, { team: [result] }, { team_id: teamID });
            resolve(newResult);
        });
    });
}