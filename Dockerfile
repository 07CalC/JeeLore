
FROM node:slim

WORKDIR /app

ADD package*.json /app/

RUN npm install

COPY backend /app/backend

CMD [ "node", "backend/server.js"]
