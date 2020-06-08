import Api from "../utils/Api";
import Props from "../utils/Props";

let alt = require('../alt');
let ConfigActions = require('../actions/ConfigActions');

class ConfigStore {
    constructor() {
        this.config = {};

        this.exportPublicMethods({
            getConfig: this.getConfig,
            getItemInConfig: this.getItemInConfig,
        });

        this.bindListeners({
            handleFetch: ConfigActions.FETCH,
            handleFetchUpdated: ConfigActions.FETCH_UPDATED
        })
    }

    getConfig = () => {
        return this.config;
    };

    getItemInConfig = (key) => {
        if (this.config[key] !== undefined) {
            return this.config[key]
        }
        return undefined
    };


    handleFetchUpdated(result) {
        this.config = result;
    };

    handleFetch = () => {
        let self = this;
        Api.get("/ajax/config", function (result) {
            self.config = result["data"];
            ConfigActions.fetchUpdated(self.config);
        });
    };
}

module.exports = alt.createStore(ConfigStore, 'ConfigStore');