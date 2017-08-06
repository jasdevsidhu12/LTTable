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
        this.getRowClassName = this.getRowClassName.bind(this);
    }

    displayTeamData(teamID, teamLogo, teamName) {
        this.props.getTeamData(teamID, teamLogo, teamName);
    }

    getRowClassName(isGreenRow) {
        return isGreenRow? 'league-table-tb-green-row' : 'league-table-tb-green-font-row';
    }
    renderTableHeader() {
        let headers = [];
        ltColumns.forEach((name, index) => {
            headers.push(<td key={index}>{ name }</td>);
        });
        return headers;
    }

    renderTableBody() {
        const table = this.props.standings.table;
        const tableRows = [];
        let isGreenRow = false;
        let rowClassName = this.getRowClassName(isGreenRow);
        if (table) {
            table.forEach((obj, key) => {
                rowClassName = this.getRowClassName(isGreenRow);
                tableRows.push(
                    <tr key={key} className={ rowClassName }>
                        <td>{ obj.position }</td>
                        <td>
                            <a onClick={ () => {
                                this.displayTeamData(obj.team_id, obj.team_logo, obj.team_name)
                            } }>
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
                isGreenRow = !isGreenRow;
            });
        }
        return tableRows;
    }
    render() {
        return (
            <Table>
                <thead>
                    <tr className="league-table-tb-green-row league-table-tb-header">
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