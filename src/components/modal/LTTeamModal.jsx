import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Grid, Row, Col, Thumbnail } from 'react-bootstrap';

class LTTeamModal extends Component {
    constructor() {
        super();
        this.closeTeamModal = this.closeTeamModal.bind(this);
        this.renderTeamContent = this.renderTeamContent.bind(this);
    }

    closeTeamModal() {
        this.props.closeModalTeamContent();
    }

    renderTeamContent() {
        if (this.props.isOpen) {
            let players = this.props.selectedTeam.team[0];
            let displayPlayers = []
            console.log('&&&&&******** selected team *******&&&');
            console.log(this.props.selectedTeam);
            players.forEach((obj) => {
                console.log(obj);
                displayPlayers.push(
                    <Thumbnail src={obj.img} alt="242x200">
                        <h3>{ obj.name }</h3>
                        <p>
                            <label>Nationality: { obj.nationality }</label>
                            <label>Date of Birth: { obj.birth_date }</label>
                        </p>
                    </Thumbnail>
                );
            });
            return players;
        }
    }

    render() {
        return (
            <Modal show={this.props.isOpen}>
                Yeah !!!!!! Modal
                <a onClick={() => { this.closeTeamModal()}}> Close </a>
                { this.renderTeamContent() }
            </Modal>
        );
    }
}
LTTeamModal.propTypes = {
    closeModalTeamContent: PropTypes.func,
    isOpen: PropTypes.bool,
    selectedTeam: PropTypes.object
}
export default LTTeamModal;
