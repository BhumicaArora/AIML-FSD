const http = require('http')
const fs = require('fs/promises');
const server = http.createServer(async (req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    if(req.url == '/'){
        const a = await fs.readFile('./users.json', "utf-8");
        res.end(a);
    }
    else if(req.url == '/home'){
        const a = await fs.readFile('./home.html',"utf-8");
        res.end(a);
    }
    else{
        const a = await fs.readFile('./error.html',"utf-8");
        res.end(a);
    }
}); 
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});