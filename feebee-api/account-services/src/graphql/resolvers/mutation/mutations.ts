const mutations ={

    signUp: async (parent, args, context) => {
        if(args.input.email === undefined && args.input.phoneNumber === undefined) {
            throw new Error("Must provide either a phone numnber or an email!")
        }

        const result = await context.authProvider.signUp(args.input.email, args.input.phoneNumber, args.input.password);
        return {
            email: args.input.email,
            phoneNumber: args.input.phoneNumber,
            password: args.input.password,
            userId: result.userId,
        };
    },

    signIn: async (parent, args, context) => {
        const authSession = await context.authProvider.signIn(args.input.username, args.input.password);
        return authSession
    },

    signOut: async (parent, args, context) => {
        const result = await context.authProvider.signOut(args.input.accessToken);
        return {
            success: result
        }
    }


 
}

export default mutations;