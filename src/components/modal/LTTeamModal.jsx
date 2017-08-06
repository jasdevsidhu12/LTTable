import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Media } from 'react-bootstrap';

class LTTeamModal extends Component {
    constructor() {
        super();
        this.closeTeamModal = this.closeTeamModal.bind(this);
        this.renderTeamContent = this.renderTeamContent.bind(this);
        this.renderTeamHeader = this.renderTeamHeader.bind(this);
        this.getPlayerDefaultValue = this.getPlayerDefaultValue.bind(this);
    }

    closeTeamModal() {
        this.props.closeModalTeamContent();
    }

    getPlayerDefaultValue(value) {
        return (value && value !== '') ? value : 'Not Stated';
    }

    renderTeamContent() {
        if (this.props.isOpen) {
            let players = this.props.selectedTeam.team[0];
            let displayPlayers = []
            players.forEach((obj, index) => {
                displayPlayers.push(
                    <Media key={index}>
                        <Media.Left>
                            <img src={obj.img} alt="Image"/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>{obj.name}</Media.Heading>
                            <p>
                                <label>
                                    Nationality: { this.getPlayerDefaultValue(obj.nationality) }
                                </label>
                                <br />
                                <label>
                                    Date of Birth: { this.getPlayerDefaultValue(obj.birth_date) }
                                </label>
                                <br />
                                <label>
                                    Shirt Number: { this.getPlayerDefaultValue(obj.shirt_number)}
                                </label>
                            </p>
                        </Media.Body>
                    </Media>
                    );
            });
            return displayPlayers;
        }
    }

    renderTeamHeader() {
        return (
            <Modal.Header closeButton>
                <div>
                    <img src={this.props.teamLogo} /> {this.props.teamName + ' F.C Players'}
                </div>
            </Modal.Header>
        );
    }
    render() {
        return (
            <Modal show={this.props.isOpen} onHide={() => { this.closeTeamModal()}}>
                <div className="modal-dialog-header">
                    { this.renderTeamHeader() }
                </div>
                <div className="modal-dialog-content">
                    { this.renderTeamContent() }
                </div>
            </Modal>
        );
    }
}
LTTeamModal.propTypes = {
    closeModalTeamContent: PropTypes.func,
    isOpen: PropTypes.bool,
    selectedTeam: PropTypes.object,
    teamName: PropTypes.string,
    teamLogo: PropTypes.string
}
export default LTTeamModal;
