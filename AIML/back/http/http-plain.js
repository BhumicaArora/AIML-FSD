const http= require('http'); 
const fs=require('fs/promises');                     //import http module 
const server= http.createServer(async(req,res)=>{      //create server using module(request,response)
    console.log(req.url)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.write("<h1>Hello,world</h1>");     //infinite loop in buffer mode

    const data= await fs.readFile("./home.html","utf-8");
    res.end(data);
});
const port=3000;
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

//server.listen(()=>{
//   const a=server.address();                           //by default varies b/w 49k to 69k
//    console.log(`Server is running on port ${a.port}`);
    
