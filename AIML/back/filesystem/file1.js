//Synchronous,blocking nature,continuous

//const fs=require('fs');
//const data=fs.readFileSync("./data.txt");
//console.log(data.toString());                                string format
//OR
//const data=fs.readFileSync("./data.txt",{encoding:"utf-8"});  //encoding is optional
//console.log(data);                                            //buffer format


//fs.writeFileSync("./data3.txt"," hello this is my new work","utf-8");
//fs.appendFileSync("./data1.txt"," work from another file","utf-8");
//fs.renameSync("./data3.txt","./data5.txt");
//fs.unlinkSync("./data5.txt");


const fs=require('fs');
const data=fs.readFileSync("./data.txt","utf-8");  
console.log(data);                                            
if(data.match("H")){
    console.log("H is found");
    const newdata=data.replace("H","ABES");
    fs.writeFileSync("./data.txt",newdata,"utf-8");
}

