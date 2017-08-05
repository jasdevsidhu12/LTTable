import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Media } from 'react-bootstrap';

class LTTeamModal extends Component {
    constructor() {
        super();
        this.closeTeamModal = this.closeTeamModal.bind(this);
        this.renderTeamContent = this.renderTeamContent.bind(this);
        this.getPlayerNationality = this.getPlayerNationality.bind(this);
        this.getPlayerDOB = this.getPlayerDOB.bind(this);
    }

    closeTeamModal() {
        this.props.closeModalTeamContent();
    }

    getPlayerNationality(nationality) {
        return (nationality && nationality !== '') ? nationality : 'Not Stated';
    }

    getPlayerDOB(dob) {
        return (dob && dob !== '') ? dob : 'Not Stated';
    }

    renderTeamContent() {
        if (this.props.isOpen) {
            let players = this.props.selectedTeam.team[0];
            let displayPlayers = []
            players.forEach((obj, index) => {
                displayPlayers.push(
                    <Media key={index}>
                        <Media.Left>
                            <img width={64} height={64} src={obj.img} alt="Image"/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>{obj.name}</Media.Heading>
                            <p>
                                <label>
                                    Nationality: { this.getPlayerNationality(obj.nationality) }
                                </label>
                                <br />
                                <label>
                                    Date of Birth: { this.getPlayerDOB(obj.birth_date) }
                                </label>
                            </p>
                        </Media.Body>
                    </Media>
                    );
            });
            return displayPlayers;
        }
    }

    render() {
        return (
            <Modal show={this.props.isOpen}>
                Yeah !!!!!! Modal
                <a onClick={() => { this.closeTeamModal()}}> Close </a>
                <div>
                    { this.renderTeamContent() }
                </div>
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