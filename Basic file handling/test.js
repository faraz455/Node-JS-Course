//simple basic things performed in node js 
// file handling and geting data from one file to anther


//1. getting variable from other js file
const {x,y} = require('./test2.js')
console.log(x,y);

//2. reading a file 
const fs = require('fs');

fs.readFile('file.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
})

//3. adding test to the file and creating the file if exist
fs.writeFile('./file1', "file created by .writeFile and test added",()=>{
    console.log("file created and written");
})

//4. creating a directory and if it exist deleting it
if(!fs.existsSync('./fileSystem'))
{
    fs.mkdir('./fileSystem',(err)=>{
        if(err){
            console.log(err);
        }
    });
    console.log("file created");
}
else{
    fs.rmdir('./fileSystem',(err)=>{
        if(err){
            console.log(err);
        }
    })
}


//5. reading a big file chunk by chunk 
//6. writing in anther file chunk by chunk

const readStream = fs.createReadStream('./Blogs/blog1.txt');
const writeStream = fs.createWriteStream('./Blogs/blog2.txt');


readStream.on('data', (chunk)=>{
    //reading data from blod1 chunk by chunk
    console.log("***********************new chunk starts here***********************");
    console.log(chunk.toString());
    
    //writing data from blog1 to blog2 chunk by chunk*/
      writeStream.write('/n*********New Chunk**************/n');
      writeStream.write(chunk.toString());
})

// 6. writing one file to anther chunk by chunk by single line using pipe 
const readStream = fs.createReadStream('./Blogs/blog1.txt');
const writeStream = fs.createWriteStream('./Blogs/blog2.txt');
readStream.pipe(writeStream);

