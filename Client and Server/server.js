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

//basic routing stuff
//setting path for html page
//depending upon the url requested


path = './html_pages/';
console.log(req.url);
switch(req.url){
    case '/':
        path+='html_page1.html';
        res.statusCode=200;
        break;

    case '/html_page2':
        path+='html_page2.html';
        res.statusCode=200;
        break;

        //it for redirecting
        //this "html_page_2" url is directed to
        //html_pages2
    case '/html_page_2':

        //redirect status code
        res.statusCode = 301;

        //redirecting this case to html_page2
        res.setHeader('Location', '/html_page2');
        res.end();
        
    default:
        path+='html_error_page.html';
        res.statusCode=404;
        break;
}

//getting html file
fs.readFile(path,(err,data)=>{
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