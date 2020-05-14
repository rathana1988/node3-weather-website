const path = require('path');
const express = require('express');
const hbs = require('hbs');

const forecast = require('./utils/forecast.js');

const app = express();
const port = process.env.PORT || 3000;

//Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

/* if we are changing the views folder name into templates we need to do this for the application to work
const views = path.join(__dirname, '../templates');
app.set('view', views) */

//Set up handle bar engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

//set up for static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  //res.send('Hello Express!');
  res.render('index', {
    title: 'weather app',
    name: 'Rathna Kumar',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About app',
    name: 'Rathna Kumar',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help app',
    name: 'Rathna Kumar',
  });
});

app.get('/help/*', (req, res) => {
  // res.send('Help Article not found!');
  res.render('helparticlenotfound', {
    title: 'Help Article not found!',
  });
});

app.get('/weather', (req, res) => {
  //res.send('Weather page!');
  //res.send('Weather page!');
  //console.log(req.query.latitude);
  if (!req.query.latitude && !req.query.longtitude) {
    return res.send({ error: 'Please provide the address' });
  } else {
    //47.6062,122.3321
    forecast(req.query.latitude, req.query.longtitude, (error, data) => {
      //console.log('Error', error);
      console.log('Data', data);
    });
  }

  res.send({
    forecast: 'Its sunny day',
    location: 'Medavakkam',
  });
});

app.get('*', (req, res) => {
  //res.send('My 404 page!');
  res.render('pagenotfound', {
    title: 'Page Not Found',
  });
});

/* app.get('/help', (req, res) => {
  res.send('Help Page!');
});

app.get('/about', (req, res) => {
  res.send('About Page!');
}); */

app.listen(port, () => {
  console.log('Port is up' + port);
});
