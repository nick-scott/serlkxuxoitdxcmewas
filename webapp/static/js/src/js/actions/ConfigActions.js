var alt = require('../alt');

class ConfigActions {
    fetch() {
        return "";
    }

    fetchUpdated(users) {
        return users
    }
}

module.exports = alt.createActions(ConfigActions);