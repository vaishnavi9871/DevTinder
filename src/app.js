const express=require('express');
const app=express();

//this will match all the HTTPS requests with the path /hello and send the response "Hello Vaishnavi Agrahari from JPL"
app.use("/user",(req,res) => {
    res.send("Hello Vaishnavi Agrahari from JPL");    
});

app.get("/user",(req,res) => {
    res.send({firstname:"Vaishnavi",lastname:"Agrahari",age:22});
});
app.post("/user",(req,res) => {
    res.send("User created successfully");
} );  
app.delete("/user",(req,res) => {           
    res.send("User deleted successfully");
});
app.patch("/user",(req,res) => {
    res.send("User updated successfully through patch");
});
app.put("/user",(req,res) => {
    res.send("User updated successfully through put");
});

app.listen(7777,()=>{
    console.log('Server is running on port 7777');
} );