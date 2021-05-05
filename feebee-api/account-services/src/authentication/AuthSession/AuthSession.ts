class AuthSession {
    userId: String;
    accessToken: string;
    userVerified: boolean;
    emailVerified: boolean;

    constructor (userId: string, accessToken: string, userVerified: boolean, emailVerified: boolean) {
        this.userId = userId;
        this.accessToken = accessToken;
        this.userVerified = userVerified;
        this.emailVerified = emailVerified;
    }
}

export default AuthSession;