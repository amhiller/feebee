"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var queries_1 = __importDefault(require("./query/queries"));
//import user from '.user/user';
var mutations_1 = __importDefault(require("./mutation/mutations"));
var resolvers = {
    Query: queries_1.default,
    Mutation: mutations_1.default
};
exports.default = resolvers;
