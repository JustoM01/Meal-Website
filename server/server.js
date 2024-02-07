const express = require('express');
 const PORT = process.env.PORT || 3001;
const app = express();


// Middleware for parcing data
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(PORT, ()=>{
    console.log('app is lsitening')
})