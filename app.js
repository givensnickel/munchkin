var express=require("express"),
    app = express(),
    mysql = require("node-mysql"),
    bodyParser = require("body-parser"),
    dbConfig=require("./config/db"),
    createForm = require("./app/forms/signup");

module.exports=app;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.set('views',"./views");
app.set('view engine','ejs');

var db = new mysql.DB(dbConfig);

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
   db.connect(function(conn){
     var sql = "INSERT INTO users (user_name, email, password) VALUES ( '" +
      request.form.username + "', '" +
      request.form.email+"', '"+
      request.form.password +
      "');";
     conn.query(sql,function(result){
       response.json(result);
     });
   });
});

app.use(function(request,response){
  response.status(404).send("page not found!");
  console.log("404");
});
