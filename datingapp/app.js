const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/about', function (req, res) {
    res.send('doei World!')
  });

  app.get('/eminem', function (req, res) {
    res.sendFile ("/Users/maxmulder/muziek.m4a")
  });


app.get('/about2', (req, res) => {
    res.render('about.ejs', {name: "max", gast: "vriendelijke snuiter"});
});


  app.get('*', (req, res) => {
        res.status(404).render('not-found.ejs', {name: "max"});
  });


 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

