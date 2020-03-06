
const express = require('express')
var slug = require('slug')
var bodyParser = require('body-parser')
const app = express()

const port = 3000

var data = [
  {
    id: 'evil-dead',
    title: 'Evil Dead',
    plot: 'Five friends travel to a cabin in the …',
    description: 'Five friends head to a remote …'
  },
  {
    id: 'the-shawshank-redemption',
    title: 'The Shawshank Redemption',
    plot: 'Two imprisoned men bond over a number …',
    description: 'Andy Dufresne is a young and  …'
  }
]



express()
.use(express.static('static'))
.use(bodyParser.urlencoded({extended: true}))
.set('view engine', 'ejs')
.set('views', 'views')
.get('/', movies)
.post('/', upload.single('cover') , add)
.get('/add', form)
.get('/:id', movie)
.delete('/:id', remove)
.use(notFound)

.listen(8000)

  function movies(req, res) {
  var doc = '<!doctype html>'
  var length = data.length
  var index = -1
  var movie

  doc += '<title>My movie website</title>'
  doc += '<h1>Movies</h1>'

  while (++index < length) {
    movie = data[index]
    doc += '<h2><a href="/' + movie.id + '">' + movie.title + '</a></h2>'
    doc += '<p>' + movie.plot + '</p>'
  }


  res.send(doc)
}



express()
  .use(express.static('./public'))
  .set('view engine', 'ejs')
  .set('views', 'views')


  
  

function movies(req, res) {
  res.render('list.ejs', {data: data})
}

function movie(req, res, next) {
  const id = req.params.id
  const movie = data.filter(item => item.id === id)[0];
  console.log(movie)
  res.render('detail.ejs', {data: movie})
}

function form(req, res) {
  res.render('add.ejs')
}


function add(req, res) {
  var id = slug(req.body.title).toLowerCase()
  console.log(req.body)
  data.push({
    id: id,
    title: req.body.title,
    plot: req.body.plot,
    description: req.body.description

  })

  res.redirect('/' + id)
}

function remove(req, res) {
  var id = req.params.id
a
  data = data.filter(function (value) {
    return value.id !== id
  })

  res.json({status: 'ok'})
}

function notFound(req, res) {
  res.status(404).render('not-found.ejs')
}