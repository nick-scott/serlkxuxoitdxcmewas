var alt = require('../alt');

class UserActions {
    fetch() {
        return "";
    }

    fetchUpdated(users) {
        console.log('fetchUpdated', users);
        return users
    }
}

module.exports = alt.createActions(UserActions);