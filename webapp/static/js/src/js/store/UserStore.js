import Api from "../utils/Api";
import Props from "../utils/Props";

let alt = require('../alt');
let UserActions = require('../actions/UserActions');

class UserStore {
    users = {}

    constructor() {
        this.exportPublicMethods({
            getUsers: this.getUsers,
        });

        this.bindListeners({
            handleFetch: UserActions.FETCH,
            handleFetchUpdated: UserActions.FETCH_UPDATED
        })
    }

    getUsers = () => {
        return this.users;
    };

    handleFetchUpdated(result) {
        console.log("handleFetchUpdated")
        this.users = result;
    };

    handleFetch = () => {
        let self = this;
        Api.get("/ajax/users", function (result) {
            self.users = result["data"];
            console.log("DATA RETRIEVED", result);
            UserActions.fetchUpdated(self.users);
        });
    };
}

module.exports = alt.createStore(UserStore, 'UserStore');