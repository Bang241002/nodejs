var express = require ('express');
var app = express();

app.set('views', '/.views');
app.set('view engine', 'jade');

app.set('/', function(req, res){
    res.render('two',{
        title: 'page Two',
        message:'Page Two by jade!'
    });
});


var memberAPI = express.Router();

memberAPI.get('/api/member' , function(req, res){
    resizeBy.send('Member page!');
});

memberAPI.get('/api/member/profile' , function(req, res){
    resizeBy.send('Member profile page!');
});

memberAPI.get('/api/member/changepassword' , function(req, res){
    resizeBy.send('Member change password page!');
});

var adminAPI = express.Router();

adminAPI.get('/api/admin' , function(req, res){
    resizeBy.send('Admin page!');
});


app.use('/api/member', memberAPI);
app.use('/api/admin', adminAPI);
app.use(express.static(__dirname +' /public'));

app.listen(8080);
