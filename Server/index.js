const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Controller = require('./Controller');

const app = express();
const port = 5001;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/homes', Controller.info.get);

app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});
