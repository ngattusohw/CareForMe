FROM node:alpine

RUN mkdir /client
WORKDIR /client
COPY . /client
RUN yarn
RUN yarn global add nodemon

CMD ["yarn", "dev"]

EXPOSE 3000