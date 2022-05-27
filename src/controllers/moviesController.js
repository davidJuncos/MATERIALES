const db = require('../database/models/index.js')

const list = (req,res) => {
     
    db.movies.findAll()
    .then((resultado) => {movies = resultado})
    .catch((error) => {console.log(error)})
    res.send(movies)
    res.render('movieList',{movies})
}

module.exports = {
    list
}