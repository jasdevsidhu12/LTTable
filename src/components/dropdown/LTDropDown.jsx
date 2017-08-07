import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { SplitButton, MenuItem, DropdownButton } from 'react-bootstrap';

class LTDropDown extends Component {
    constructor() {
        super();
        this.renderMenuItem = this.renderMenuItem.bind(this);
        this.setSeasonsID = this.setSeasonsID.bind(this);
        this.getSeasonName = this.getSeasonName.bind(this);
        this.dropDownButton = '';
    }

    setSeasonsID(seasonID, seasonName) {
        this.props.setSeasonID(seasonID, seasonName);
        if (this.dropDownButton && this.dropDownButton.innerText) {
            this.dropDownButton.innerText = this.getSeasonName(seasonName);
        }
    }

    getSeasonName(seasonName) {
        return " " + seasonName + " ";
    }
    renderMenuItem() {
        const menuItems = [];
        this.props.content.map((obj, key) => {
            menuItems.push(
                <MenuItem key={key} eventKey={key.toString()}
                onClick={() => this.setSeasonsID(obj.season_id, obj.name)} >
                    <span>{obj.name}</span>
                </MenuItem>
            );
        });
        return menuItems;
    }

    componentDidMount() {
        this.dropDownButton = document.getElementById('splitButton');
    }
    render() {
        const seasonName = this.props.content[0].name;
        return (
                <DropdownButton id="splitButton" noCaret
                bsStyle="success" title={this.getSeasonName(seasonName)}>
                    { this.renderMenuItem() }
                </DropdownButton>
        );
    }
}

LTDropDown.propTypes = {
    content: PropTypes.array,
    setSeasonID: PropTypes.func
}
export default LTDropDown;