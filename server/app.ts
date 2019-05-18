import express = require('express');
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { typeDefs } from './schema';
import { resolvers } from './resolver';
import mongoose = require('mongoose');

const PORT = 5555;
const app = express();

const path = '/api/graphql';
const apolloserver = new ApolloServer({
	typeDefs,
	resolvers: resolvers as any,
});
apolloserver.applyMiddleware({ app, path });

const server = createServer(app);

mongoose.connect('mongodb://mongo:27017/careforme', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database.");
});

server.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
});
