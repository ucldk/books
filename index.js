const express = require('express');
const webRoutes = require('./routes/web');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', webRoutes());

app.listen(port, () => console.log(`server running on port: ${port}`));
