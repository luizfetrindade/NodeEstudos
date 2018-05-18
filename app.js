const express = require('express')
const path = require('path')
const sassMiddleware = require('node-sass-middleware')
const exphbs = require('express-handlebars');
const routes = require('./src/routes/routes')

const app = express()

app
.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public/css'),
    force: true,
    outputStyle: 'compressed',
    prefix: '/css'
}))

.use('/public', express.static(path.join(__dirname, 'public')))

.engine('handlebars', exphbs({ defaultLayout: 'main' }))
.set('view engine', 'handlebars')

.set('port', (process.env.PORT || 3000))

.get('/', routes.home)

.get('/about',routes.about)

.get('/social', routes.social)

.listen(app.get('port'),()=>
console.log("Servidor rodando na porta"+app.get('port'))
)
