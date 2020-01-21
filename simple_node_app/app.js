import { createServer } from 'http';

const onRequest = (request, response) => {
    response.writeHead(200);
    response.write('Hello GitHub Actions\n');
    response.end();  
}

const server = createServer(onRequest).listen(8080);
console.log('Server has started');
setTimeout(()=>{
    server.close(()=>{
        console.log('Server has stopped')
    })
},5000)