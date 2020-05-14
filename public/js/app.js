//console.log('client side javascript loaded');

fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    //console.log(data);
  });
});
const url =
  'http://api.weatherstack.com/current?access_key=377fd436d8cd634406d75aeadc8328f2&query=12.917143,80.192352';

fetch(url).then((response) => {
  //console.log(response);
  response.json().then((data) => {
    console.log(data);
  });
});

const form = document.querySelector('form');
const search = document.querySelector('input');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(search.value);
});
