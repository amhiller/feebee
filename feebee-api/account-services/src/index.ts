import createServer from './apollo/server';
import path from 'path';
import dotenv from 'dotenv';


const port = 4001;

createServer()
    .listen({ port })
    .then(({ url }) => {
        console.log(`Serevr ready at ${url}`)
    });