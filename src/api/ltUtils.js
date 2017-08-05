export default function isCurrentTeamExist(teamID, teams) {
    console.log('isCurrentTeamExist');
    console.log(teams);
    console.log(teamID);
    const isExist = teams.find((obj) => {
        return obj.team_id === teamID;
    });
    return isExist ? true : false;
}