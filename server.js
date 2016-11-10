var express = require('express')
var app = express()
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
 


app.set('view engine', 'ejs');

app.get('/',function (req, res) { 
   res.render('main');
})

app.post('/upload',upload.single('file'),function (req, res) { 
    res.writeHead(200, {"Content-Type": "application/json"});
    var resp = JSON.stringify({
        size:String(req.file.size)
    });
   res.end(resp);
})

app.listen(process.env.PORT || 8080,function(){
      console.log("Started 8080")
    })