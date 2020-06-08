import React from 'react';
import "../../css/button.css"

export default class SaveButton extends React.Component {
    render() {
        return <div className={'button saveButton'} onClick={this.props.onSave}>
            Save
        </div>
    }
}