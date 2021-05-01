enum AuthError {
    usernameAlreadyExists = 'UsernameAlreadyExists',
    passwordNotAllowed = 'PasswordNotAllowed',
    passwordTooShort = 'PasswordTooShort',
    usernameInvalide = 'UsernameInvalid',
    usernameInvalid = 'UsernameInvalid',
    unknownError = 'unknownError',
    userIsNotConfirmed = 'userIsNotConfirmed',
    incorrectUsernameOrPassword = 'incorrectUsernameOrPassword',
    userDoesNotExist = 'userDoesNotExist',
    userDisabled = 'userDisabled',
    invalidSession = 'invalidSession',
    usernameCannotBeEmpty = 'usernameCannotBeEmpty',
    passwordLowerCaseMissing = 'passwordLowerCaseMissing',
    passwordSepcialCharacterMissing = 'passwordSepcialCharacterMissing',
    passwordUpperCaseMissing = 'passwordUpperCaseMissing',
    invalidAccessToken = 'invalidAccessToken',
    accessTokenRevoked = 'accessTokenRevoked',
    userdisabled = 'userdisabled'
}

export default AuthError;