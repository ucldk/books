const express = require('express');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', webRoutes());
app.use('/api', apiRoutes());

app.listen(port, () => console.log(`server running on port: ${port}`));
