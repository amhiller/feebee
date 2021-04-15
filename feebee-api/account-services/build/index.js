"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./apollo/server"));
var port = 4001;
server_1.default()
    .listen({ port: port })
    .then(function (_a) {
    var url = _a.url;
    console.log("Serevr ready at " + url);
});
