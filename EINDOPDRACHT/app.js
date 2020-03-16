const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose'); 

const app = express();

// Database 
const db = require('./config/keys').MongoURI;

//connectie
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('MongoDB werkt!'))
.catch(err => console.log('Error bij connecten'));


//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs')

//BodyParser
app.use(express.urlencoded({ extended: false }));

//routes

app.use('/', require('./routes/index'));

app.use('/users', require('./routes/users'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server is gestart op poort: 5000'));