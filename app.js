const express = require('express');
const app = express();

app.use(express.json());
 
app.get('/users' , (req,res) => {
    res.send("GET request fetched");
});

app.post('/users',(req,res) =>{
    const newuser = req.body;
    console.log("Received user" , newuser);
    res.status(201).json({
        message: "User created successfully!",
        user: newUser
    })
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});