var express=require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    createForm = require("./app/forms/signup");
    
module.exports=app;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.set('views',"./views");
app.set('view engine','ejs');


app.get("/login",function (request,response){
  response.render('pages/login',{});
});

app.get("/signup",function (request,response){
  response.render('pages/signup',{});
});

app.post("/signup" , createForm , function (request, response){
  if (!request.form.isValid) {
       response.json(request.form.errors);
       return;
   }
});

app.use(function(request,response){
  response.status(404).send("page not found!");
  console.log("404");
});
