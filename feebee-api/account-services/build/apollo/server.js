"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var schema_1 = __importDefault(require("../graphql/schema/schema"));
var resolvers_1 = __importDefault(require("../graphql/resolvers/resolvers"));
function createServer() {
    var server = new apollo_server_1.ApolloServer({
        typeDefs: schema_1.default,
        resolvers: resolvers_1.default,
        playground: true
    });
    return server;
}
exports.default = createServer;
