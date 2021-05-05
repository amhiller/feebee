const { gql } = require('apollo-server')

const typeDefs = gql`

    type User {
        email: String
    }

    type Query {
        user: String
    }

    type Mutation {
        signUp(input: SignUpInput!): SignUpResponse
        signIn(input: SignInInput!): SignInResponse
        signOut(input: SignOutInput!): SignOutResponse
    }

    input SignUpInput {
        email: String
        phoneNumber: String
        password: String
    }

    type SignUpResponse {
        email: String
        phoneNumber: String
        userId: String
    }

    input SignInInput {
        username: String
        password: String
    }

    type SignInResponse{
        success: Boolean
        session: String
    }


    input SignOutInput {
        accessToken: String!
    }

    type SignOutResponse {
        success: Boolean
    }
`

export default typeDefs;