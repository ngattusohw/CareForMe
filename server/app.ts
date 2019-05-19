import express = require('express');
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { typeDefs } from './schema';
import { resolvers } from './resolver';
import mongoose = require('mongoose');
import * as cors from 'cors';
const bluebird = require("bluebird");
const redis = require("redis");
const client = redis.createClient('redis://redis-sessions');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const PORT = 5555;
const app = express();

const corsOptions = {
   origin: 'http://localhost',
   credentials: true
};

app.use(cors(corsOptions));

const path = '/api/graphql';


const apolloserver = new ApolloServer({
    typeDefs,
    resolvers: resolvers as any,
    context: async ({ req }) => {
    	const session_id = (req.headers && req.headers.session_id || '');
    	var user;
    	try {
    		const userId = await client.getAsync(session_id);
    		user = await resolvers.Query.getUser({}, {id: userId}, {dataSources: null});
    	} catch(err) {
    		console.log(err);
    		return null;
    	}
    	return {session_id: session_id, user: user};
    }
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
