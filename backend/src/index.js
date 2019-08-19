const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);

mongoose.connect('mongodb+srv://useradmin:useradmin@cluster0-kpycr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(require('./routes'));

server.listen(3333);
