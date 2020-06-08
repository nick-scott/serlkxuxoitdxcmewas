FROM readytalk/nodejs


WORKDIR /webapp/static/js
ADD /webapp /app/
RUN npm install
ADD . /app

CMD []
ENTRYPOINT ["/nodejs/bin/npm", "start"]