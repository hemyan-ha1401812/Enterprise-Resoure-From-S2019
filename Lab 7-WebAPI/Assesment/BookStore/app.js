//todo 1 implement the server

const express = require('express');
const routes = require('./routes');
const app = express();

app.use( express.json() );
app.use('/api/', routes);

const port = 8090;
app.listen(port, () => {
    const host = "localhost";
    console.log(`App is running @ http://${host}:${port}`);
});

