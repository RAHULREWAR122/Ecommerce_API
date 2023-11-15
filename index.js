const express = require('express');
const port = process.env.PORT || 3200;
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config();

const router = require('./routes/index');
const db = require('./config/mongoose');

app.use(express.urlencoded({ extended: true })); 


app.use('/products', router);


app.listen(port, (err) => {
    if (err) {
        console.log('ERROR in running server');
    }
    console.log('Server running Successfully on port no:', port);
});
