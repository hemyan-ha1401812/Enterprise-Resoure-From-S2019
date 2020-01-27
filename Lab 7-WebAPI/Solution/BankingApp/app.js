const express = require("express");
const routes = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = 3600;
const hostName = 'localHost';

// app.get('/',(req, res)=> {
//     res.send("welcome to Hemyan page");
// });



// the order is matter
app.use(express.static(path.resolve(__dirname,'public')));
app.use (bodyParser.json());
app.use('/', routes)


app.listen(port, hostName, () => {
    console.log(`Server started @ http://${hostName}: ${port}`);
    });



