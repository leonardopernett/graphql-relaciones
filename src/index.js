const {GraphQLServer} = require('graphql-yoga');
const {typeDefs} = require('./graphql/typedefs');
const {resolvers} = require('./graphql/resolvers');


const server = new GraphQLServer({
    typeDefs:typeDefs,
    resolvers:resolvers
});


server.start({port:3000, endpoint:'/graphql'},({ port }) => {
    console.log('🚀 Server is running on localhost:4000');
})