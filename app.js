const express = require('express');
const app = express();
const arquivo = require('fs');


app.get("/", async function(request, response) {

    response.send(arquivo.readFileSync("./home.html", "utf8"));
    //response.send("<!DOCTYPE html><html><head><title>DevTools</title></head><body><h1>DevTools</h1><p>This is a DevTools Home page</p><p>Here, you have more informations about the team.</p><table style='width:100%'>  <tr>    <th>Firstname</th>    <th>Lastname</th>     <th>Age</th>  </tr>  <tr>    <td>Ricardo</td>    <td>Gil</td>     <td>00</td>  </tr>  <tr>    <td>Vinicius</td>    <td>Silverio</td>     <td>00</td>  </tr>   <tr>    <td>Karoline</td>    <td>Ribeiro</td>     <td>00</td>  </tr>  <tr>    <td>Bruno</td>    <td>Rosa</td>     <td>00</td>  </tr></table></body></html>");
})

app.listen(3000, function(error) {
    if (error == true) {
        console.log("some error occurred");
    } else {
        console.log("listening on localhost:3000");
    }

})