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

//  https://www.googleapis.com/customsearch/v1
//  api key for me = AIzaSyDCqb8QKmC-6Pi1jbXVGZRnDrwm9OZLCPE
//  cx id = 017096797796684188476:eo9ax7sbxoe
//
// The following JSON parameters are used for this API:
// q: specifies search text
// num: specifies number of results. Requires an integer value between 1 and 10 (inclusive)
// start: the "offset" for the results, which result the search should start at. Requires
// an integer value between 1 and 101.
// imgSize: the size of the image. I used "medium"
// searchType: must be set to "image"
// filetype: specifies the file type for the image. I used `"jpg", but you can leave this out if file extension doesn't matter to you.
// key: an API key, obtained from https://console.developers.google.com/
// cx: the custom search engine ID from the previous section