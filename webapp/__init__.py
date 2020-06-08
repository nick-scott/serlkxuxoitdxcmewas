import os
import sqlite3
from threading import Lock

from flask import Flask, current_app

app = Flask(__name__)
app.config.from_envvar('APP_CONFIG_FILE', silent=True)

engine = None
lock = Lock()
db_filename = os.getcwd() + "/db/webapp.db"
schema_filename = os.getcwd() + "/db/schema.sql"

db_is_new = not os.path.exists(db_filename)


def init_db():
    print('Init DB')
    with sqlite3.connect(db_filename) as conn:
        if not db_is_new:
                conn.execute("delete from users")
                conn.execute("drop table users")
        print('Creating schema')
        with open(schema_filename, 'rt') as f:
            schema = f.read()
        conn.executescript(schema)
        # else:
        #     conn.execute("delete from users")
        #     conn.execute("delete from users")
            # for basePath in app.config["PICTURE_DIRS"]:
            #     for file in os.listdir(basePath):
            #         path = basePath + file
            #         conn.execute("insert into picture (path) values ('" + path + "')")
            # print('Database exists, assume schema does, too.')
    return conn


initialized = False


def get_db():
    return sqlite3.connect(db_filename).cursor()


with app.test_request_context():
    current_app.get_db = get_db

init_db()

from webapp import backend_api