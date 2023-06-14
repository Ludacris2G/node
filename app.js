const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send('Hi broseidon');
})

app.listen(5000, () => {
    console.log('listening on port 5000....');
})