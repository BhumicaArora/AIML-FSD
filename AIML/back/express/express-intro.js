//to install dependencies run= npm init -y
//to install express packet  run= npm i express, npm i axios, npm i nodemon
//const express=require('express');          //type=common
import express from 'express';               //type=module
const app=express();                         //create server
const port=3000;
app.get('/',(req,res)=>{                   
    res.send("<h1>welcome to express</h1>")          //instead of end, send is used
});

app.use(express.json());          //middlewhere
app.post('/users',(req,res)=>{  
    //const data=req.body; 
    //res.send(`my name is ${data.name}`)                 
    const {name}=req.body;
    res.send(`my name is ${name}`)         
});

//http://localhost:3000/api?name=rajesh&rollno=61
// app.get('/api',(req,res)=>{
//     const{name,rollno}=req.query;
//     //const {name="guest", rollno=100}=req.query;
//     try{
//         if(!name){
//             return res.status(400).send("name is required");
//         }
//         else{
//             res.send(`Welcome to ABES:${name} and rollno is ${rollno}`) 
//         }
//     }catch(error){
//         console.log(`Error: ${error.message}`)
//     }

    //http://localhost:3000/api/bhumica/61
    app.get('/api/:name/:rollno',(req,res)=>{
        try{
            const{name,rollno}=req.params;
            res.send(`Welcome ${name} and your roll no is ${rollno}`);
        }catch(error){
            console.log(`Error: ${error.message}`)
        }
    });

    //const data=req.query;
    //console.log(data)        //to print on terminal                      
//});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

//CRUD- create,read,update,delete
//GET- to retrieve list of users, by default nature=URL(header)
//POST- create new user
//PUT- user update
//PATCH- minor changes
//DELETE- delete user

