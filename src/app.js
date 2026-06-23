const express=require('express');
const app=express();



app.use("/user",(req,res,next) => {
    // res.send("Route Handler 1");
    next();
    
},
(req,res,next) => {
    // res.send("Route Handler 2");
    next();
} ,
(req,res,next) => {
    // res.send("Route Handler 2");
    next();
}   ,
(req,res,next) => {
    // res.send("Route Handler 2");
    next();
}     
);


app.listen(7777,()=>{
    console.log('Server is running on port 7777');
} );