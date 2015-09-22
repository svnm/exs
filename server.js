var express = require('express');
var app = express();
var path = require('path');

/* view at http://localhost:8080 */
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(8080);