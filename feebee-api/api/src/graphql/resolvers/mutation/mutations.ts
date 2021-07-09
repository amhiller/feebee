const User = require('../../../mongo/models/user')

const mutations = {

    createUser: async ( parent, args, {req}) => {
        //logging for debugging
        console.log(args.input)
        const newUser = new User ({
            email: args.input.email,
            user_id: args.input.user_id,
            phoneNumber: args.input.phoneNumber
        }).save()
        return newUser
    }
}

export default mutations