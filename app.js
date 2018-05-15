const express = require('express')
const path = require('path')
const sassMiddleware = require('node-sass-middleware')
const exphbs = require('express-handlebars');
const app = express()

app.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public/css'),
    force: true,
    outputStyle: 'compressed',
    prefix: '/css'
}));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.set('port', (process.env.PORT || 3000))

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/social', (req, res) => {
    res.render('social')
});

app.get('/test', (req, res) => {
    res.render('test')
});

app.listen(app.get('port'),()=>
console.log("Servidor rodando na porta"+app.get('port'))
)