const express = require('express');
const port = 5454
const expHandlebars = require('express-handlebars')
const path = require('path')

const app = express()
app.engine('.hbs', expHandlebars({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
    var data = {name:'Sydney', 
            }
    response.render('home', data)
})
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

//DEBUG=express* node index.js