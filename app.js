const express = require('express');
const app = express();
 
app.get('/user' , (req,res) => {
    res.send("GET request fetched");
});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});