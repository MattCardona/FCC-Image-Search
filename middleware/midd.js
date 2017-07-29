const request = require('request');

var midd = (req, res, next) => {

  var q = req.params.q;
  var start = req.query.offset;
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
            // console.log(JSON.stringify(body, undefined, 2), 'this is jsonstringifiy');
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