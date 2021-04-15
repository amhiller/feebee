const { gql } = require('apollo-server')

const typeDefs = gql`

    type User {
        name: String
    }

    type Query {
        user: String
    }

    type Mutation {
        
    }
`

export default typeDefs;