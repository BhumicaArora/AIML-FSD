//Asynchronous,non blocking nature,not continuous

const read=()=>{
    const fs=require("fs");
    fs.readFile("./data.txt","utf-8",(error,data)=>{
        if(error){
            console.error("Error reading file:",error);
        }
        else{
            console.log("data from file:",data);
        }
    });
}
 module.exports=read;