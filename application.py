#!/usr/bin/env python2

from webapp import app
application = app

if __name__ == '__main__':
    application.run(host='0.0.0.0', debug=True, threaded=True, port=5013)