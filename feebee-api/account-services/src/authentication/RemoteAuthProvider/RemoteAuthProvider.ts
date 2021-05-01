import AuthSession from '../AuthSession/AuthSession';

interface RemoteAuthProvider {
    signIn(emailOrPhoneNumber: string, password: string): Promise<boolean>;
    signOut(accessToken: string): Promise<boolean>;
    
    signUp(username: string, emailOrPhoneNumber: string, password: string): Promise <AuthSession>;
}

export default RemoteAuthProvider;