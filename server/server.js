var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var port = 3737;

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(session({
  secret: 'superlongyoucanthackthissecret',
  saveUninitialized: false,
  resave: false
}));

app.post("/api/screenname", function(req, res){
  if (req.body.screenname) {
    req.session.screenname = req.body.screenname;
  }
});

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function(){
  console.log("Listeing on port ", port, " INSERT-WITTY-STATEMENT-HERE");
});
