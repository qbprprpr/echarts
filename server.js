var express = require('express')
var fs = require('fs')
var app = express()

app.get("/index.html", function(request, respone) {
    // console.log("request ->", request)
    // console.log("respone ->", respone)
    fs.readFile("./" + request.path.substr(1), function(err, data) {
        if (err) {
            console.log('err ->', err)
            respone.writeHead(404, {"Content-Type": "text/html"});
        } else {
            respone.writeHead(200, {"Content-Type": "text/html"})
            respone.write(data.toString())
        }
        respone.end();
    })
})

app.listen(8080, function() {
    console.log("后台正在运行，请访问127.0.0.1:8080")
})