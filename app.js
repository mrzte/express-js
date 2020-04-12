const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Router
const Router = require('./router/router');
app.get('/', (req, res)=>{
  res.send('Halaman Depan');
});
//Middleware
app.use(bodyParser.json());
app.use('/api/pilar', Router);

//Database
const Database = require('./database/db');

//PORT
const port = 3000;
app.listen(port, ()=> console.log('Server nya berhasil jalan . . '));
