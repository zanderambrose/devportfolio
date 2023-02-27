FROM node:latest

WORKDIR /code

COPY package.json .

RUN npm i

COPY . .

CMD [ "npm", "run", "start" ]

LABEL org.opencontainers.image.source https://github.com/OWNER/REPO
