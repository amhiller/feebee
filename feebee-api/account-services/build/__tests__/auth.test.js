"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AWSCognitoRemoteAuthProvider_1 = __importDefault(require("../authentication/RemoteAuthProvider/AWSCognitoRemoteAuthProvider"));
var userPoolId = "us-east-1_C7n0Hl74d";
var ClientId = "6idkqqncctip82abmh8sahsfqk";
describe('Authentication Manager', function () {
    var authManager = new AWSCognitoRemoteAuthProvider_1.default(userPoolId, ClientId);
    it('Should work', function () {
        expect(true).toBeTruthy();
    });
});
