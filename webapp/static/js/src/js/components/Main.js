import React from 'react';
import Api from "../utils/Api";


import UserStore from "../store/UserStore"
import UserActions from "../actions/UserActions"
import Table from "./Table"
import NewUserForm from "./NewUserForm";

import "../../css/main.css"
import Props from "../utils/Props";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }


    componentDidMount() {
        UserStore.listen(this.usersUpdated);
        setTimeout(UserActions.fetch());
    }

    componentWillUnmount() {
        UserStore.unlisten(this.usersUpdated);
    }

    usersUpdated = (store) => {
        let users = UserStore.getUsers();
        console.log("usersUpdated - users", users);
        console.log("usersUpdated - store", store);
        console.log("usersUpdated - store - users", store.users);
        this.setState({
            users: users
        })
    };


    render() {
        return <div className={"pageBody"}>
            <NewUserForm/>
            <Table data={this.state.users} />
        </div>;

    }
}
