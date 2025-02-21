//to install dependencies run= npm init -y
//to install express packet  run= npm i express, npm i axios, npm i nodemon
//const express=require('express');          //type=common
import express from 'express';               //type=module
const app=express();                         //create server
const port=3000;
app.get('/',(req,res)=>{                   
    res.send("<h1>welcome to express</h1>")          //instead of end, send is used
});
app.get('/api',(req,res)=>{
    const{name,rollno}=req.query;
    //const {name="guest", rollno=100}=req.query;
    try{
        if(!name){
            return res.status(400).send("name is required");
        }
        else{
            res.send(`Welcome to ABES:${name} and rollno is ${rollno}`) 
        }
    }catch(error){
        console.log(`Error: ${error.message}`)
    }
   
    const data=req.query;
    console.log(data)        //to print on terminal                      
});
//http://localhost:3000/api?name=rajesh&rollno=61

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

//CRUD- create,read,update,delete
//GET- to retrieve list of users, by default nature=URL(header)
//POST- create new user
//PUT- user update
//PATCH- minor changes
//DELETE- delete user

