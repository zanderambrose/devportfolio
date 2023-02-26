FROM node:latest

WORKDIR /code

COPY package.json /code

RUN npm i

COPY . .

CMD [ "npm", "run", "start" ]
