import { gql } from 'apollo-server';

const typeDefs = gql`

    type User {
        user_id: ID!
        phoneNumber: String!
        email: String!
        firtname: String
        lastname: String
    }

    type Query {
        user(user_id: ID!): User
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
    }

    input CreateUserInput {
        user_id: ID!
        phoneNumber: String!
        email: String!
        firstname: String
        lastname: String
    }

`

export default typeDefs;