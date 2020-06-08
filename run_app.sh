#!/bin/bash

cd webapp/static/js
npm install
npm run build
cd ../../../
pip3 install -r requirements.txt
python3 run_app.py

