const express = require('express');
const dateParser = require('date-parser');
const routes = require('./routes/index');

const app = express();

app.use(dateParser);
app.use('/', routes);

app.listen(3000 || process.env.PORT);