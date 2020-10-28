const express = require('express');
const fs = require('fs');
const { dirname } = require('path');

//creating express app
const app = express();

app.listen(3000);
  
// setting default page for "/" url
app.get('/',(req,res) => {

    //lets suppose its a dynamic data which 
    //needs to be transfer
    const data_transfer = [
        {'title':'title1', 'display' : 'display1'},
        {'title':'title2', 'display' : 'display2'},
        {'title':'title3', 'display' : 'display3'}
    ]
    // along with html, data is also send 
    res.render('default.ejs', {title: 'this is default page', data_transfer: data_transfer}); 
    res.send("hsd");
})
// pages for different urls
app.get('/html_page2',(req,res) => {
    res.render('page1.ejs'); 
})


// incase the url enter by user is not handles 
// this will occur 
//ERROR 404 not found
// this code should be at the end 
app.use((req,res)=>{
    res.status(404).render('404.ejs'); 
})

