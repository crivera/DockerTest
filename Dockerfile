FROM node:9.11.1

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn --pure-lockfile

COPY . .