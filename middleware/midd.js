const request = require('request');
const {Recent} = require('./../models/recent.js');

var midd = (req, res, next) => {
  var q = req.params.q;
  var start;
  if(req.query.offset){
    start = req.query.offset;
  }else{
    start = req.query.offset = 1;
  }
  var url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CX_KEY}&searchType=image&q=${encodeURIComponent(q)}&start=${start}`;
  var arr  = [];
  var obj = {};

     request({
        url: url,
        json: true
        },(err, response, body) => {
          if(err){
            res.status(400).send("Error the URL is invalid, please check for errors.");
          }
          else if(body.queries.request[0].totalResults === "0"){
            res.status(400).send('Zero result please type another search.');
          }
          else if(response.statusCode === 200){
            var recent = new Recent({search: q});
            var arr = [];
            Recent.count({}).then((count) => {
              return count;
            }).then((count) => {
              if(count === 5){
                Recent.remove({}).then((success) => {
                  recent.save();
                });
              }else{
                recent.save().then((doc) => {
                }).catch((err) => {
                  res.status(400).send('ERROR: Error ocuured tryin to save your document.')
                });
              }
            })
                body.items.forEach((val, i) => {
                  obj.url = val.link;
                  obj.snippet = val.snippet;
                  obj.thumbnail = val.image.thumbnailLink;
                  obj.context = val.image.contextLink;
                  arr.push(obj);
                  obj = {};
                })
            req.answer = arr;
            next();
          }
        });
 };

 module.exports = {midd};