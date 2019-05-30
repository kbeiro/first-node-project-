const express = require('express');
const app = express();
var http = require('http');    
var arquivo = require('fs');

var server = http.createServer(function(request, response){      
    response.writeHead(200, {'Content-Type': 'text/html'});     
    arquivo.readFile('/Users/kbeiro/Desktop/sample_project/home.html', 
        function(error, html){             
        if (error) {
            response.write("File not found");                   
            response.end();
        } else{
            response.write(html);   
            var fs = require('fs');
            var files = fs.readdirSync('/Users/kbeiro/Desktop/sample_project/home.html');
            response.end();

        }      
    });
}).listen(3031, function(error) {
    if (error == true) {
        console.log("some error occurred");
    } else {
        console.log("listening on localhost:3031");
    }

})


