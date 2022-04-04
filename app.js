const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');

const app = express();

app.use(bodyParser.json());
app.use('/', api);

app.listen(3000, () => console.log(`App listening on port `));