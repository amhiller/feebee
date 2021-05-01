"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var schema_1 = __importDefault(require("../graphql/schema/schema"));
var resolvers_1 = __importDefault(require("../graphql/resolvers/resolvers"));
var AWSCognitoRemoteAuthProvider_1 = __importDefault(require("../authentication/RemoteAuthProvider/AWSCognitoRemoteAuthProvider"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../.env' });
function createServer() {
    var server = new apollo_server_1.ApolloServer({
        typeDefs: schema_1.default,
        resolvers: resolvers_1.default,
        context: {
            authProvider: new AWSCognitoRemoteAuthProvider_1.default(process.env.USER_POOL_ID, process.env.APP_CLIENT_ID)
        },
        playground: true
    });
    return server;
}
exports.default = createServer;
