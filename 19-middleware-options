const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger');
const authorize = require('./authorize');
// req => middleware => res

// app.use([logger, authorize]);
// app.use(express.static('./public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('home page');
})

app.get('/about', (req, res) => {
    res.send('about');
})

app.get('/api/products', (req, res) => {
    res.send('products');
})

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('items');
})

app.listen(5000, () => {
    console.log('listening on 5000');
})