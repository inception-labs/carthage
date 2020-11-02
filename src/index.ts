import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'

const schema = loadSchemaSync('./src/resources/**/*.graphql', { // load from multiple files using glob
    loaders: [
        new GraphQLFileLoader()
    ]
});

// Write some resolvers
const resolvers = {};



const server = new ApolloServer({ schema, resolvers })

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))
