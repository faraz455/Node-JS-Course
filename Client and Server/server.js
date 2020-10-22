//it is require to create server
const http = require('http');

// it is to read html file
const fs = require('fs');

//server being creted 
//and it sees if request is being made
const server = http.createServer((req,res)=>{
console.log('request made');

//setting content-type as text/html so we can 
// put html file as well as simple text in response
res.setHeader('content-type', 'text/html');

//getting html file
fs.readFile('./html_pages/html_page1.html',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        //writing file to the response (res)
        res.end(data);
    }
})

});

// so if we browse "localhost:3000" 
// it will listen request from this url
server.listen(3000,'localhost',()=>{
    console.log('listening request on port 3000');
});