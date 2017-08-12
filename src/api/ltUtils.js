export function isCurrentTeamExist(teamID, teams) {
    const isExist = teams.find((obj) => {
        return obj.team_id === teamID;
    });
    return isExist ? true : false;
}

export function getDefaultHostname() {
    if (process.env.NODE_ENV === 'production') {
    return 'https://api.soccerama.pro/v1.2';
    } else {
        return 'http://localhost:8000/api';   
    }
}