const express =require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const App = express();
const port = 9000;

App.use(cors());
App.use(bodyParser.json());
App.use(express.static(path.join(__dirname,'public')));

App.listen(port, () => {
  console.log(`proxy server running at: http://localhost:${port}`);
});