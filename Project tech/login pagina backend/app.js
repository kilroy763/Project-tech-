const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

// configuratie passport
require('./config/passport')(passport);

// connect database
const db = require('./config/keys').mongoURI;

// Connect naar MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

//styles.css
app.use(express.static('./static'));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// error berichten
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

app.get('edit', (req, res) => res.render('edit.ejs'));
app.get('chat', (req, res) => res.render('chat.ejs'));
app.use('chat', (req, res) => res.render('chat'));

io.on('connection', socket => {
  socket.emit('chat-message', 'hello-world')
})



app.get('/edit', (req, res) => { 
  try {
      const user = req.user
      res.render('edit', {user}) 
  } catch (err) {
      res.status(500).send(err)
  }
})

app.post('/edit', async (req, res) => {
  try {
      const user = req.user;

      user.name = req.body.name;
      user.email = req.body.email
      user.dscrpt = req.body.dscrpt
      user.gndru = req.body.gndru
      user.gndrs = req.body.gndrs
      user.age = req.body.age
      user.img = req.body.img

      await user.save();
      res.redirect('/users/login')
  } catch (err) {
      res.status(500).send(err)
  }
})

//https://stackoverflow.com/questions/60777693/update-data-in-database-with-mongoose



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`De server is gestart op port ${PORT}`));
