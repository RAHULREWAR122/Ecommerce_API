const express = require('express');
const port = 3200;

const app = express();

require('dotenv').config();

const router = require('./routes/index');
const db = require('./config/mongoose');

app.use(express.urlencoded({ extended: true })); 
app.use('/', router);

app.listen(port, (err) => {

    if (err) {
        console.log('ERROR in running server');
}
    console.log('Server running Successfully on port no:', `${"http://localhost:3200/products/"}`);


});
