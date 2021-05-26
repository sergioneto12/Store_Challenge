'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const productRouter = require('./routes/router');

const app = express();

app.use(express());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use('/', productRouter.routes);


app.listen(config.port, () => console.log('Tá tinindo no ' + config.port))