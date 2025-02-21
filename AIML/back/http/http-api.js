const http=require('http');  
const axios=require('axios'); 
const port=3000;
const server=http.createServer(async(req,res)=>{
    console.log('hello from the server');   
    res.writeHead(200,{"content-type":"text/html"});                 //for header-pretty print
    //const response=await fetch("https://dummyjson.com/products");  //returns data in form of promise
    //const data=await response.json();
    //res.end(JSON.stringify(data));   //end takes data in form of string
//});

    const response=await axios.get("https://dummyjson.com/products");   //no need of parsing-automatically done
    const productsdata=response.data.products;    //by default variable-data and .products is used to start with array
    let frontdata=`<html><head></head><body>`
    productsdata.forEach((product)=>{
    frontdata+=`<div><img src="${product.thumbnail}"></div>`
});
    frontdata+=`</body></html>`;
    //res.end(JSON.stringify(productsdata)); 
    res.end(frontdata);  
});
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});

//node --watch filename
//npm i axios(to install packages)
//npm i nodemon -g (-g is used for global)

//API -> RESPONSE OBJECT -> .json, .text
//STRING -> OBJECT -> JSON.parse()
//OBJECT -> STRING -> JSON.stringify()