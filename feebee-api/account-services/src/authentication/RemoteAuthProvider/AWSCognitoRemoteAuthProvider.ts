import AuthSession from '../AuthSession/AuthSession';
import AuthError from '../AuthError/AuthError';
import RemoteAuthProvider from '../RemoteAuthProvider/RemoteAuthProvider';
import AWS from 'aws-sdk';
import jwt_decode from 'jwt-decode';
import { BlockScopeAwareRuleWalker } from 'tslint';

class AWSCognitoRemoteAuthProvider implements RemoteAuthProvider{

    poolData: {};
    cognitoidentityserviceprovider: AWS.CognitoIdentityServiceProvider
    constructor (userPoolId: string, clientId: string) {
        this.poolData = {
            UserPoolId: userPoolId,
            ClientId: clientId
        };
        this.cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({'region': 'us-east-2'});
    }

    signIn(username: string, password: string): Promise<any> {
        const promise: Promise<any> = new Promise(async (resolve, reject) => {
            var params = {
                AuthFlow: 'USER_PASSWORD_AUTH',
                ClientId: this.poolData['ClientId'],
                AuthParameters: {
                    'USERNAME': username,
                    'PASSWORD': password
                }
            };

            this.cognitoidentityserviceprovider.initiateAuth(params, function (err, data){
                if (err){
                    switch (err.message){
                        case 'Username should be either an email or a phone number.':
                            reject(`${AuthError.usernameInvalid}: ${err.message}`);
                            break;
                        case 'Password did not confirm with policy: Password not long enough':
                            reject(`${AuthError.passwordTooShort}: ${err.message}`);
                            break;
                        case 'User is not confirmed.':
                            reject(`${AuthError.userIsNotConfirmed}: ${err.message}`);
                            break;
                        case 'Incorrect username or password.':
                            reject(`${AuthError.incorrectUsernameOrPassword}: ${err.message}`);
                            break;
                        case 'User does not exist.':
                            reject(`${AuthError.userDoesNotExist}: ${err.message}`);
                            break;
                        case 'User is disabled.':
                            reject(`${AuthError.userDisabled}: ${err.message}`);
                            break
                        case 'Invalid session for the user, session can only be used once.':
                            reject(`${AuthError.invalidSession}: ${err.message}`);
                            break;
                        default:
                            reject(`${AuthError.unknownError}: ${err.message}`);
                            break;
                    }
                }
                else {
                    resolve({ success: true, session: data.Session});
                }
            });
        });
        return promise;
    }

    signUp(email: string, phoneNumber: string, password: string): Promise<AuthSession> {
        const promise: Promise<AuthSession> = new Promise(async (resolve, reject) => {
        
        var params = {
            ClientId: this.poolData['ClientId'],
            Password: password,
            Username: phoneNumber ? phoneNumber : email,
        };
        this.cognitoidentityserviceprovider.signUp(params, function (err, data) {
            if (err) {
                switch (err.message) {
                    case "1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6":
                    reject(`${AuthError.passwordTooShort}:  ${err.message}`);
                    break;
                    case 'User does not exist.':
                    reject(`${AuthError.userDoesNotExist}:  ${err.message}`);
                    break;
                    case 'Username should be either an email or a phone number.':
                    reject(`${AuthError.usernameInvalid}:  ${err.message}`);
                    break;
                    case 'Password did not conform with policy: Password not long enough':
                    reject(`${AuthError.passwordTooShort}:  ${err.message}`);
                    break;
                    case 'An account with the given email already exists.':
                    reject(`${AuthError.usernameAlreadyExists}:  ${err.message}`);
                    break;
                    case "Username cannot be empty":
                    reject(`${AuthError.usernameCannotBeEmpty}:  ${err.message}`);
                    break;
                    case "Password did not conform with policy: Password must have lowercase characters":
                    reject(`${AuthError.passwordLowerCaseMissing}:  ${err.message}`);
                    break;
                    case "Password did not conform with policy: Password must have symbol characters":
                    reject(`${AuthError.passwordSepcialCharacterMissing}:  ${err.message}`);
                    break;
                    case "Password did not conform with policy: Password must have uppercase characters":
                    reject(`${AuthError.passwordUpperCaseMissing}:  ${err.message}`);
                    case "An account with the given phone_number already exists.":
                    reject(`${AuthError.usernameAlreadyExists}:  ${err.message}`);
                    break;
                    default:
                    reject(`${AuthError.unknownError}:  ${err.message}`);
                    break;
                }
                }
                else {
                resolve(new AuthSession(data.UserSub, '', false))
                }
            });
            });
        
            return promise;
        }

    signOut(accessToken: string): Promise<boolean> {
        const promise: Promise<boolean> = new Promise(async (resolve, reject) => {
            var params = {
                AccessToken: accessToken  /* required */
            };
            this.cognitoidentityserviceprovider.globalSignOut(params, function (err, data) {
                if (err) {
                    switch (err.message) {
                        case "Invalid Access Token":
                            reject(`${AuthError.invalidAccessToken}:  ${err.message}`);
                            break;
                        case "Access Token has been revoked":
                            reject(`${AuthError.accessTokenRevoked}:  ${err.message}`);
                            break;
                        case "User is disabled.":
                            reject(`${AuthError.userdisabled}:  ${err.message}`);
                            break;
                        default:
                            reject(`${AuthError.unknownError}:  ${err.message}`);
                        break;
                    }
                }
                else {
                  resolve(true);
                }
              });
            });
            return promise;
          }



}


export default AWSCognitoRemoteAuthProvider;
