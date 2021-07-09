import AWSCognitoRemoteAuthProvider from '../authentication/RemoteAuthProvider/AWSCognitoRemoteAuthProvider';
import RemoteAuthProvider from '../authentication/RemoteAuthProvider/RemoteAuthProvider';

const userPoolId = "us-east-1_C7n0HI74d";
const ClientId = "42eqrhv4aeiu3oe0r2pt79sp9n";

describe('Authentication Manager', () => {
    let authManager: RemoteAuthProvider

    console.log(authManager)

    beforeEach(async () => {
        authManager = new AWSCognitoRemoteAuthProvider(userPoolId, ClientId)
        console.log(authManager)
    })

    
    it('Should work and print authManager', () => {
        console.log(authManager)
        expect(true).toBeTruthy();
    })

    it('Should create a new account with email and password', async () => {
        let email = `amhiller96@gmail.com`
        let phoneNumber = '631-241-5763'
        let password = `123abcdeA!`

        let authSession = await authManager.signUp(email, '', password)
         
        console.log(authSession)

        expect(authSession.userId).not.toBeUndefined()
        expect(authSession.userVerified).toBe(false)
    })

})

