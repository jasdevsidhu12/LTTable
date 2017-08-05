import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { ltColumns } from '../../api/ltConstant';
import { Table } from 'react-bootstrap';

class LTTable extends Component {
    constructor() {
        super();
        this.renderTableHeader = this.renderTableHeader.bind(this);
        this.renderTableBody = this.renderTableBody.bind(this);
        this.displayTeamData = this.displayTeamData.bind(this);
    }
    renderTableHeader() {
        let headers = [];
        ltColumns.forEach((name, index) => {
            headers.push(<td key={index}>{ name }</td>);
        });
        return headers;
    }
    displayTeamData(teamID, teamLogo) {
        console.log('displayPlayersData');
        console.log(teamID + ' '+ teamLogo);
        this.props.getTeamData(teamID, teamLogo);
    }
    renderTableBody() {
        const table = this.props.standings.table;
        const tableRows = [];
        console.log(table);
        if (table) {
            table.forEach((obj, key) => {
                tableRows.push(
                    <tr key={key}>
                        <td>{ obj.position }</td>
                        <td>
                            <a onClick={ () => { this.displayTeamData(obj.team_id, obj.team_logo) } }>
                                { obj.team_name }
                            </a>
                        </td>
                        <td>{ obj.played }</td>
                        <td>{ obj.won }</td>
                        <td>{ obj.draw }</td>
                        <td>{ obj.loose }</td>
                        <td>{ obj.goal_difference }</td>
                        <td>{ obj.points }</td>
                    </tr>
                );
            });
        }
        return tableRows;
    }
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        { this.renderTableHeader() }
                    </tr>
                </thead>
                <tbody>
                    { this.renderTableBody() }
                </tbody>
            </Table>
        );
    }
}
LTTable.propTypes = {
    standings : PropTypes.object,
    getTeamData: PropTypes.func
}
export default LTTable;