import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.post('/home', function (req, res){
var x = req.body.fname 
console.log(x)
res.render("pallavi.ejs", {
        "name":x
});

});

app.get('/index', function (req, res) {
        console.log(__dirname)
        res.sendFile(path.join(__dirname, "views/index.html"))

});
app.get('/home', function (req, res) {
        console.log(__dirname)
        res.sendFile(path.join(__dirname, "views/home.html"))

});
app.get('/pallavi', (req, res) => {
        // console.log(__dirname)
     
});

app.listen(3000, function (res, req) {
        console.log("server start")
})