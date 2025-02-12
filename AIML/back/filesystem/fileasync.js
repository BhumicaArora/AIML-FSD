const fs= require('fs/promises'); 
const read= async ()=>{                                         //async and
    try{
        const data= await fs.readFile("./data.txt","utf-8");    //await is used to resolve pending message
        console.log(data);
    }   
    catch(error){
        console.log(error.message)
    }                           
}
const write=async()=>{
    try{
        await fs.writeFile("data2.txt","this is my new file","utf-8");   //encoding scheme-"utf-8"
    }
    catch(error){
        console.log(error.message)
    }
}
read();
write();
