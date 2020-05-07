const express =require('express');
const path = require('path');
const App = express();
const port = process.env.PORT || 3000;

App.use(express.static(path.join(__dirname,'public')));

App.listen(port, () => {
  console.log(`server runing at: http://localhost:${port}`);
});