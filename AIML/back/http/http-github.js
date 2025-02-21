const http=require('http');  
const axios=require('axios'); 
const port=3000;
const server=http.createServer(async(req,res)=>{
    console.log('hello from the server');   
    res.writeHead(200,{"content-type":"text/html"}); 
    //const response=await axios.get("https://api.github.com/users");   //gives all users

    //const response=await axios.get("https://api.github.com/search/users?q=location:ghaziabad");   //specifically for ghazibad users
    //OR-
    const response=await axios.get("https://api.github.com/search/users",{
        params:{
            q:"location:ghaziabad"
        }
    }); 
    
    const productsdata=response.data;    
    let frontdata=`<html><head></head><body>`
    productsdata.forEach((user)=>{
    frontdata+=`<div><img src="${user.avatar_url}"></div>`
});
    frontdata+=`</body></html>`;

    res.end(frontdata);  
});
    server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});