const express = require('express');
const app = express();
const routes = require('./routes');



//Allow serving static files from public folder
app.use( express.static(path.resolve(__dirname, 'public')) );

//Mount the routes to the app
app.use('/api/', routes);
app.use( express.json() );
const port = 9090;
app.listen(port, () => {
    const host = "localhost";
    console.log(`App is running @ http://${host}:${port}/`);
});