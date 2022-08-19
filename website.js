const http=require('http');
const fs=require('fs');

const port=process.env.PORT || 7000;

const server=http.createServer((req,res)=>{
    console.log(req);
    
    res.setHeader('Content-Type', 'text/html');
    if(req.url==='/cwh'){
        res.statusCode=200;
        res.end('<h1>This is CodeWithHarry</h1> <p>Hey this is the way to rock the world!</p>')
    }
    else if(req.url==='/about'){
        res.statusCode=200;
        res.end('<h1>About CodeWithHarry</h1> <p>Hey this is about CodeWithHarry!</p>')
    }
    else if(req.url==='/'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html');
        res.end(data.toString())
    }
    else{
        // res.harry();
        res.statusCode=404;
        res.end('<h1>Not found</h1> <p>Hey this page was not found on this server!</p>')
    }
});

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});