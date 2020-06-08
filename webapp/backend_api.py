import traceback
import os
from flask import render_template, jsonify, current_app, request, json
from webapp import app
import base64


@app.route("/", methods=["GET"])
def load_page():
    return render_template("home.html")


@app.route("/ajax/users", methods=["GET"])
def ajax_users():
    cursor = current_app.get_db()
    # with current_app.get_db() as cursor:
    cursor.execute("select * from users")
    users = []
    for row in cursor.fetchall():
        print(row)
        jsonEntry = {
            'first_name': row[1],
            'last_name': row[2],
            'email': row[3],
        }
        users.append(jsonEntry)
    return jsonify(dict(data=users))


@app.route("/ajax/create/user", methods=["POST"])
def ajax_create_user():
    newUserData = json.loads(request.data)
    cursor = current_app.get_db()
    cursor.execute(
        "insert into users (first_name, last_name, email) values ('" +
        newUserData.get('first_name') + "', '" +
        newUserData.get('last_name') + "', '" +
        newUserData.get('email') + "')")
    cursor.execute("COMMIT")
    return jsonify(dict())


@app.route("/ajax/config", methods=["GET"])
def ajax_get_config():
    ret_cfg = {}
    config_keys = [
        "REQUIRE_EMAIL",
    ]
    for cfg_key in app.config:
        if cfg_key in config_keys:
            ret_cfg[str(cfg_key).lower()] = app.config[cfg_key]
    return jsonify(dict(data=ret_cfg))


@app.route("/ajax/test", methods=["GET"])
def ajax_get_test_picture():
    with open("webapp/static/images/test.jpg", "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
    return jsonify(dict(base64=encoded_string))


@app.errorhandler(500)
def server_error(e):
    traceback.print_exc()
    return "", 500
