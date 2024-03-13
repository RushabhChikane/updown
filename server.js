
// Importing the http module 
const http = require("http"); 
  
// Creating server  
const server = http.createServer((req, res) => { 
    // Sending the response 
    res.statusCode = 200;
    res.write("This is the response from the server"); 
    res.end(); 
}) 
  
// Server listening to port 3000 
server.listen((3000), () => { 
    console.log("Server is Running"); 
})