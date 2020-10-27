const express = require('express');
const fs = require('fs');
const { dirname } = require('path');

//creating express app
const app = express();

app.listen(3000);
 
// setting default page for "/" url
app.get('/',(req,res) => {
    res.sendFile('./CLIENT AND SERVER/html_pages/html_page1.html',{root: __dirname +'/../'}); 
})
// pages for different urls
app.get('/html_page2',(req,res) => {
    res.sendFile('./CLIENT AND SERVER/html_pages/html_page2.html',{root: __dirname +'/../'}); 
})

// redirecting urls
app.get('/html_page_2',(req,res)=>{
    res.redirect('/html_page2'); 
    
})

// incase the url enter by user is not handles 
// this will occur 
//ERROR 404 not found
// this code should be at the end 
app.use((req,res)=>{
    res.status(404).sendFile('./CLIENT AND SERVER/html_pages/html_error_page.html',{root: __dirname +'/../'}); 
})

