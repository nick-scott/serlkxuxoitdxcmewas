import os
os.environ["APP_CONFIG_FILE"] = os.getcwd() + "/env/cfg/default.cfg"
from webapp import app
app.run(host='0.0.0.0', port=9876, threaded=True)

