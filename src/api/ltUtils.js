export default function isCurrentTeamExist(teamID, teams) {
    const isExist = teams.find((obj) => {
        return obj.team_id === teamID;
    });
    return isExist ? true : false;
}