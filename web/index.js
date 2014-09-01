var express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    queue = require('./queue'),
    recaptcha = require('simple-recaptcha');

var app = express();

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false }));

app.route('/').get(function(req, res) {
  res.render('index');
});

app.route('/submit').post(function(req, res) {
  var ip = req.ip,
      challenge = req.body.recaptcha_challenge_field,
      response = req.body.recaptcha_response_field;

  recaptcha(config.captchakey, ip, challenge, response, function(err) {
    if (err) return res.send(err.message);
    queue.enqueue(req.body.username, req.body.email);
    res.send('Success');
  });
});


app.listen(3000);
