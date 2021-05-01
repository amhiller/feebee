"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthSession = /** @class */ (function () {
    function AuthSession(userId, accessToken, userVerified) {
        this.userId = userId;
        this.accessToken = accessToken;
        this.userVerified = userVerified;
    }
    return AuthSession;
}());
exports.default = AuthSession;
