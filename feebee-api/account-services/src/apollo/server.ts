import { ApolloServer } from 'apollo-server';
import typeDefs from '../graphql/schema/schema';
import resolvers from '../graphql/resolvers/resolvers';
import AWSCognitoRemoteAuthProvider from '../authentication/RemoteAuthProvider/AWSCognitoRemoteAuthProvider';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env'})

function createServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: {
            authProvider: new AWSCognitoRemoteAuthProvider(process.env.USER_POOL_ID, process.env.APP_CLIENT_ID)
        },
        playground: true
    })
    return server;
}

export default createServer;