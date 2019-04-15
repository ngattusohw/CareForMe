FROM node:alpine

RUN mkdir /client
WORKDIR /client
COPY . /client
RUN npm install

CMD ["npm", "run", "start"]

EXPOSE 3000