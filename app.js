var express=require("express"),
    app = express();

module.exports=app;

app.set('views',"./views");
app.set('view engine','ejs');

app.get("/login",function (request,response){
  response.render('pages/login',{});
});

app.use(function(request,response){
  response.status(404).send("page not found!");
  console.log("404");
});
