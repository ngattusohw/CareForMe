import express = require('express');
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { typeDefs } from './schema';
import { resolvers } from './resolver';

const PORT = 5555;
const app = express();

const path = '/api/graphql';
const apolloserver = new ApolloServer({
	typeDefs,
	resolvers: resolvers as any,
});
apolloserver.applyMiddleware({ app, path });

const server = createServer(app);
server.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
});
