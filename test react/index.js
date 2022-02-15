const express = require('express')
const path = require('path');

const PORT= process.env.PORT || 8080;

const app= express();

app.get('/', (req, res) =>{
    res.sendFile(`${__dirname}/index.html`)
})
app.listen(PORT,() =>{
    console.log('app started')
})