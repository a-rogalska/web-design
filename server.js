var express = require('express');
var sass    = require('node-sass-middleware');
var app     = express();
const path  = require('path');

app.use(
    sass({
        src: __dirname,
        dest: path.join(__dirname, '/'),
        debug: true,
        outputStyle: 'compressed',
        prefix:  '/' 
    }),
  express.static(__dirname + '/')
);

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '/')});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});