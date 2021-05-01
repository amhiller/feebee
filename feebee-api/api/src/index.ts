import createServer from './apollo/server';
import dotenv from 'dotenv';

const port = 4000;

createServer()
    .listen({port})
    .then(({ url }) => {
        console.log(`api server ready at ${url}`);
    })