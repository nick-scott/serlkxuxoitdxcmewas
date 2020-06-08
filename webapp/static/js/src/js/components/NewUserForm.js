import UserActions from "../actions/UserActions";
import SaveButton from "./SaveButton";
import React from 'react';
import Api from "../utils/Api";

export default class NewUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    onSave = () => {
        Api.post("/ajax/create/user", {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email
        }, () => {
            UserActions.fetch()
        })
    }

    render() {
        return <div className={'newUserForm'}>
            <input className={'textInputField first_name'} onChange={this.firstNameUpdated}
                   value={this.state.firstName}/>
            <input className={'textInputField last_name'} onChange={this.lastNameUpdated} value={this.state.lastName}/>
            <input className={'textInputField email'} onChange={this.emailUpdated} value={this.state.email}/>
            <SaveButton onSave={this.onSave}/>
        </div>
    }

    firstNameUpdated = (event) => {
        this.setState({firstName: event.target.value});
    }
    lastNameUpdated = (event) => {
        this.setState({lastName: event.target.value});
    }
    emailUpdated = (event) => {
        this.setState({email: event.target.value});
    }
}
