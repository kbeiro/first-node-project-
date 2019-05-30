const express = require('express');
const app = express();
const arquivo = require('fs');


app.get("/", async function(request, response) {

    response.send(arquivo.readFileSync("./home.html", "utf8"));
})

app.listen(process.env.PORT || 3000, function(error) {
    if (error == true) {
        console.log("some error occurred");
    } else {
        console.log("listening on localhost:3000");
    }

})