if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const mongodb = require('mongodb')
// gebruikte npm packages



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Kilroy763:test@datingapp-rgvh4.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

var db = null

//connect met database





const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

app.use(express.static('./static'))
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))





app.get('/', nietingelogt, (req, res) => {
  res.render('index.ejs', { name: req.user.name, email :req.user.email })
})




app.get('/inloggen', alingelogt, (req, res) => {
  res.render('inloggen.ejs')
})




app.post('/inloggen', alingelogt, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/inloggen',
  failureFlash: true
}))




app.get('/registreren', alingelogt, (req, res) => {
  res.render('registreren.ejs')
})




app.post('/registreren', alingelogt, (req, res) => {
  db.collection('test').insertOne({
    name: req.body.name,
    email: req.body.email,
    password: req.body.name,
  }, done)

  function done(err, data) {
    if (err) {
      next(err)
    } else {
      res.redirect('/' + data.insertedId)
    }
  }

})




app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/inloggen')
})




function nietingelogt(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/inloggen')
}






function alingelogt(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}







app.listen(3000)


// gebruik gemaakt van de volgende bron: https://www.youtube.com/watch?v=-RCnNyD0L-s&t=1919s