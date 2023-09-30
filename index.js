const {readFile}= require("fs")

readFile("./content/file.txt","utf8",(data)=>{
console.log(data);
})