const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

nunjucks.configure('views', {noCache: true})
app.set('view engine', 'html')
app.engine('html', nunjucks.render)

app.get('/', (req, res, next) => {
	res.render('index')
})

app.listen(3000, () => {
	console.log('Listening on port 3000...')
})
