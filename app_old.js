const http=require('http');

http.createServer((req,res)=>{
    res.write("Hello Word");
    res.end();
}).listen(8080);

console.log("Liste 8080");