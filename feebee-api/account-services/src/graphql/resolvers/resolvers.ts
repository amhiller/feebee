import queries from './query/queries';
import mutations from './mutation/mutations';

const resolvers = {
    Query: queries,
    Mutation: mutations
}

export default resolvers;