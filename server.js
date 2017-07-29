require('./config/config.js');
const express = require('express');
const request = require('request');
const hbs = require('hbs');

var {midd} = require('./middleware/midd.js');

var app = express();
var port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');
//if all is well add data to a recent database and call next and run the code
app.set('view engine', 'hbs');
app.use('/assets', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/api/imagesearch/:q(*)', midd, (req, res) => {
  res.send(req.answer);
});

app.listen(port, () => {
  console.log(`Listening to port : ${port}`);
})

