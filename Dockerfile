FROM node:9.10.0-slim

EXPOSE 3000

ARG NODE_ENV
ENV NODE_ENV production

RUN mkdir /app
WORKDIR /app
ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile

ADD .env .env.example /app/
ADD . /app

CMD ["yarn", "start"]