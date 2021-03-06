const cool = require('cool-ascii-faces')
const funky_intro = require('funny-words')
const express = require('express')
const emoji = require('emoji-cool');

const app = express()
app.engine('html', require('ejs').renderFile); app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.send('Hello Mars! <br> Days until next year:' + Math.round(( new Date().setFullYear(new Date().getFullYear() + 1, 0, 1) - new Date() )/(1000 * 60 * 60 * 24)));
})

app.get('/source', function(req, res){ res.redirect('https://github.com/jkup/one-line/'); })
app.get('/hangUnlessSomeoneElseReturnsFromHere', function(req, res) {
  res.redirect('https://www.google.com/?tbm=isch&q=when+will+my+husband+return+from+war');
}); // To make this route work, someone else needs to return a response
app.get('/useless', function(req, res){ res.redirect('http://www.theuselessweb.com/'); })
app.get('/findMoreHacktoberfestLabelledIssues', function(req, res){ res.redirect('http://issuehub.io/?label[]=hacktoberfest'); })
app.get('/randNum/cake', function(req, res) { res.json({num: 44}); });
app.get('/hello/:name', function(req, res) { res.json({"hello" : req.params.name}); })
app.get('/goodbye/:name', function(req, res) { res.json({"goodbye" : req.params.name}); })
app.get('/admin', function(req, res) { res.json("ACCESS DENIED"); })
app.get('/haveSomeFunCats', function(req, res) { res.redirect('http://www.catgifpage.com/'); });
app.get('/leftpad/:val/:len', function(req, res) { res.json({ 'response': (+req.params.len > 0) ? (Array(+req.params.len-req.params.val.length).fill(0).join('') + req.params.val).slice(-req.params.res) : req.params.val })});

app.use(function (req, res, next) { res.status(404); res.render('404'); });

console.log(emoji)
console.log(cool())
console.log(funky_intro("Welcome to jkup, a Node.js app where you can only contribute one line at a time. Inspired by jkup himself."))

var server = app.listen(process.env.PORT || 3000, function () {  // now we can close it if needed
  console.log("Server started");
});
app.use(express.static('public'));
console.log("I like this idea. :p");
