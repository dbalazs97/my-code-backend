const express = require('express');
const app = express();

// Load routing
require('./route/index')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.error(err);
});

app.listen(3000, function() {
    console.log('Listening on 3000');
});