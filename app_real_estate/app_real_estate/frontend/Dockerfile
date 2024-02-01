FROM node:18

RUN mkdir "app"

WORKDIR /app

COPY ./package.json ./package.json

RUN npm i

RUN npm i -D webpack webpack-cli

RUN npm i serve -g

COPY ./ ./

RUN npm run build





