import { createServer } from 'http';

const onRequest = (request, response) => {
    response.writeHead(200);
    response.write('Hello GitHub Actions\n');
    response.end();  
}

const server = createServer(onRequest).listen(8080);
console.log(`Server has started [ENV=${process.env.NODE_ENV}]`);
if(process.env.NODE_ENV == 'development'){
    setTimeout(()=>{
        server.close(()=>{
            console.log('Server has stopped')
        })
    },5000)
}
