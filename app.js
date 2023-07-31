require("dotenv").config();

const express = require('express');
var expressLayouts=require("express-ejs-layouts");

const app= express();
const port = 8000 || process.env.PORT;

app.use( express.urlencoded({extended : true}));
app.use(express.json());

app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));

app.get('*', function(req,res){
  res.status(404).render('404');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });