const express=require('express');
const app=express();

app.use("/test",(req,res) => {
    res.send("Hi Vaishnavi Agrahari how u do learning BE/FE");    
});
 
app.listen(7777,()=>{
    console.log('Server is running on port 7777');
} );