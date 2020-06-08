If you want to just straight up run this you can just run the shell script which 'should' work

that would be: `./run_app.sh` which will do everything and start the app on `localhost:9876`

if you want to do some development you need to run `npm run dev` 
and open chrome with CORS disabled (since the frontend running on port 8080 
will talk to the backend on 9876). You can do this by running chrome with these args: 
`--args --disable-web-security --auto-open-devtools-for-tabs --user-data-dir='/tmp/chromeNoCORS'`

Main take away here is that there are essentially two applications. The frontend (node) and the backend (python)
the benefit here is that the front end is super dumb and makes ajax calls to a back end which can then be
written in anything. Security wise you would have both of these on the same server so the calls happen
internally.

other stuff here is left over and used for other things. If it doesnt look like it gets used, it
probably doesn't.