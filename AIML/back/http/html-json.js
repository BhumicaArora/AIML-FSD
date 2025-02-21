const http = require('http');
const fs = require('fs/promises');
const users = [{
    id: 1, name: 'Bhumica', email: 'bhumica@example.com',
},{
    id: 1, name: 'Krishna', email: 'krishna@example.com',
}, {
    id: 1,  name: 'Vidhi', email: 'vidhi@example.com',
}]
const server = http.createServer (async (req,res) => 
    {
    // res.statusCode = 200;
    // res.setHeader('Content-Type','text-plain');
    // res.writeHead(200, { 'Content-Type': 'text/plain '});
    // res.end('Hello World!');
    res.writeHead(200, { 'Content-Type': 'application/json'});
    // res.end(JSON.stringify(users));
    //res.end(JSON.stringify(users[2]));
    // const data = users.map((user) => {
    //     return user.name;
    // })
    //res.end(JSON.stringify(data));
    const jdata = await fs.readFile("./users.json", "utf-8");
    const users = JSON.parse(jdata);

    // let data =  ""
    // users.forEach((user) => {
    //      data+=" "+ user.name;
    // });
   // res.end(JSON.stringify(data));
    res.end(JSON.stringify(users));

});
port = 3000;
server.listen(port,() => {
    console.log(`Server is running on ${port}`)
});