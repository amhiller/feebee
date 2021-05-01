import { gql } from 'apollo-server';

const typeDefs = gql`

    type User {
        id: ID!
        phoneNumber: String
        email: String
        firtname: String
        lastname: String
    }

`

export default typeDefs;