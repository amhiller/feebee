import queries from './query/queries';
import mutations from './query/queries';

const resolvers = {
    Query: queries,
    Mutation: mutations
}

export default resolvers;