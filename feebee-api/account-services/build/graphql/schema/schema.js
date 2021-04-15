"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gql = require('apollo-server').gql;
var typeDefs = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    type User {\n        name: String\n    }\n\n    type Query {\n        user: String\n    }\n\n    type Mutation {\n        \n    }\n"], ["\n\n    type User {\n        name: String\n    }\n\n    type Query {\n        user: String\n    }\n\n    type Mutation {\n        \n    }\n"])));
exports.default = typeDefs;
var templateObject_1;
