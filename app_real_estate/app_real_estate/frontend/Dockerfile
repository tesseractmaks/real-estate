FROM node:18 AS BUILD

RUN mkdir "app"

WORKDIR /app

COPY ./package.json ./package.json
COPY ./src ./src


RUN npm i

COPY ./frontend/ ./

RUN npm build

FROM nginx_estate_app

COPY --from=BUILD /app/ /nginx/static/
COPY --from=BUILD /app/src /nginx/static/