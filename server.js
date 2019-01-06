const express = require('express');

const app = express();

app.use('/', express.static('./'));

app.listen(4000, (err, res) => {
    console.log('Running!');
});