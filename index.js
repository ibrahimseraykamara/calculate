const express = require("express");
const bodyParser= require("body-parser")
const app = express()


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/calculator.html");

});

app.post("/", function (req, res) {

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;;


    res.send("The result of the calculation is " + result)
});

app.get("/calculator", function (req, res) {
    res.sendFile(__dirname + "/calculator.html");
});


app.post("/calculator", function(req, res){
   var weight= parseFloat(req.body.weight) ;
   var height = parseFloat(req.body.height);

   var result = weight/(height*height);
   res.send("your result is "  + result)
})




app.listen(2000, () => {
    console.log("server is running at port 2000")
})