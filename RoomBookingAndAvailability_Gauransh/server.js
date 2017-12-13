const express = require('express');
const bodyParser = require('body-parser'); 
const path = require('path'); // for Working with file & folder paths
const http = require('http'); // for Creating Http Server
const app = express(); // Bring in Express

const api = require('./server/routes/api'); // import API

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false})); // Tell Parser not to accept any nested objects

app.use(express.static(path.join(__dirname, 'dist'))); // Serve static files from dist folder (created by ng build command)

app.use('/api', api);  

// Send all non-API routes to the dist/index.html file (where Angular App itself rresides)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));