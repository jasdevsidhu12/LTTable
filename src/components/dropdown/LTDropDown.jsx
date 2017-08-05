import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { SplitButton, MenuItem } from 'react-bootstrap';

class LTDropDown extends Component {
    constructor() {
        super();
        this.renderMenuItem = this.renderMenuItem.bind(this);
        this.setSeasonsID = this.setSeasonsID.bind(this);
    }

    setSeasonsID(seasonID) {
        this.props.setSeasonID(seasonID);
    }

    renderMenuItem() {
        console.log('renderMenuItem');
        console.log(this.props.content);
        const menuItems = [];
        this.props.content.map((obj, key) => {
            menuItems.push(
                <MenuItem key={key} eventKey={key.toString()} onClick={() => this.setSeasonsID(obj.season_id)}>
                    {obj.name}
                </MenuItem>
            );
        });
        return menuItems;
    }

    render() {
        return (
            <div>
                <SplitButton id="splitButton" title={this.props.type}>
                    { this.renderMenuItem() }
                </SplitButton>
            </div>
        );
    }
}

LTDropDown.propTypes = {
    content: PropTypes.array,
    type: PropTypes.string,
    setSeasonID: PropTypes.func
}
export default LTDropDown;