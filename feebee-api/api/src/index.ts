import createServer from './apollo/server';
import dotenv from 'dotenv';
const mongoose = require("mongoose");

dotenv.config({ path: '.env'})


const port = 4000;

console.log(process.env.DBCLOUD)

//database
const db = async () => {
    try {
        const success = await mongoose.connect(process.env.DBCLOUD, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('DB Connected')
    } catch (error) {
        console.log('DB Connection error', error)
    }
};

db();

createServer()
    .listen({port})
    .then(({ url }) => {
        console.log(`api server ready at ${url}`);
    })