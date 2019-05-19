import express = require('express');
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { typeDefs } from './schema';
import { resolvers } from './resolver';
import mongoose = require('mongoose');
import cookieSession = require('cookie-session');
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = 5555;
const app = express();

app.use(
	cookieSession({
		name: 'session',
		keys: 'secret',
		maxAge: 6 * 60 * 60 * 1000,
	})
);

const corsOptions = {
   origin: 'http://localhost',
   credentials: true,
   methods: ['GET', 'PUT', 'POST', 'OPTIONS'],
};

app.use(cors(corsOptions));

const path = '/api/graphql';
const apolloserver = new ApolloServer({
    typeDefs,
    resolvers: resolvers as any,
    context: ({ req }) => ({ req }),
});

apolloserver.applyMiddleware({ app, path, cors: corsOptions });

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
