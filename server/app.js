const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const createServer = require('http').createServer;
const typeDefs = require('./schema.js');
const resolvers = require('./resolver.js');

const PORT = 5555;
const app = express();

const apolloserver = new ApolloServer({typeDefs, resolvers});
apolloserver.applyMiddleware({app});

const server = createServer(app);
server.listen(PORT, ()=>{
    console.log("Server is listening on port "+PORT);
});
