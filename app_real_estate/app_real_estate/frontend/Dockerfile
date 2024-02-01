FROM node:18 AS BUILD

RUN mkdir "app"

WORKDIR /app

COPY ./package.json ./package.json

RUN npm i

COPY ./ ./

RUN npm run build


FROM nginx
COPY --from=BUILD /app/dist /nginx/
COPY --from=BUILD /app/src /nginx/static/src

