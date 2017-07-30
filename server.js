require('./config/config.js');
const express = require('express');
const request = require('request');
const hbs = require('hbs');
const _ = require('lodash');

const {mongoose} = require('./db/mongoose.js');
var {midd} = require('./middleware/midd.js');
var {Recent} = require('./models/recent.js');

var app = express();
var port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use('/assets', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/api/imagesearch/:q(*)', midd, (req, res) => {
  res.send(req.answer);
});

app.get('/api/latest/imagesearch', (req, res) => {
  //limit might not work as expected
  Recent.find({}).limit(5).then((docs) => {
    var filtered = [];
    docs.forEach((val) => {
      filtered.push(_.pick(val, ['search', 'createdAt']));
    });
    // console.log(`This i sthe doc::: ${filtered}`);
    res.send(filtered);
  }).catch((err) => {
    res.status(400).send(err);
  })
})

app.listen(port, () => {
  console.log(`Listening to port : ${port}`);
})

