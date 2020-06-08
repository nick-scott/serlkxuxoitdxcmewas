var uuid = require('uuid/v4');

export default class Api {

    static getApi() {
        if (process.env.NODE_ENV === "development") {
            return "http://" + window.location.hostname + ":9876"
        }
        return ""
    }

    static get(url, callback_success, callback_error) {
        let uri = Api.getApi() + url;
        $.ajax({
            url: uri,
            type: 'get',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                callback_success(data);
            },
            error: function (jqXHR, exception) {
                if (callback_error) callback_error(exception);
            }
        });
    }

    static post(url, data, callback_success, callback_error) {
        let uri = Api.getApi() + url;
        $.ajax({
            url: uri,
            type: 'post',
            dataType: 'json',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                callback_success(data);
            },
            error: function (jqXHR, exception) {
                if (callback_error) callback_error(exception);
            }
        });
    }


    static get_external(url, callback_success, callback_error) {
        let uri = Api.getApi() + url;
        $.ajax({
            url: uri,
            type: 'get',
            dataType: 'jsonp',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                callback_success(data);
            },
            error: function (jqXHR, exception) {
                if (callback_error) callback_error(exception);
            }
        });
    }
}