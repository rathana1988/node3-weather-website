const request = require('request');
const forecast = (latitude, longtitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=377fd436d8cd634406d75aeadc8328f2&query=' +
    latitude +
    ',' +
    longtitude;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('unable to connect weather app services!', undefined);
    } else if (response.body.error) {
      callback('unable to find location !', undefined);
    } else {
      callback(undefined, response.body.current);
    }
  });
};

module.exports = forecast;
