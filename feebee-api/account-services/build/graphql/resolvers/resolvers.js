"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var queries_1 = __importDefault(require("./query/queries"));
var queries_2 = __importDefault(require("./query/queries"));
var resolvers = {
    Query: queries_1.default,
    Mutation: queries_2.default
};
exports.default = resolvers;
