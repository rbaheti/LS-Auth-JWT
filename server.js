const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/auth', { useMongoClient: true });

const app = express();
app.use(bodyParser.json());

require('./controllers')(app);

app.listen(5000, (req, res) => {
  console.log('server listening on port 5000');
});
