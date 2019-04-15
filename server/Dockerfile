FROM node:alpine

WORKDIR /server

ADD . /server

RUN npm install
RUN npm install nodemon -g

CMD ["npm", "run", "dev"]

EXPOSE 5000