var axios = require('axios');

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = 'b714ec74bbab5650795063cb0fdf5fbe';

function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    }).join('&')
}

function prepUrl (type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5
  }
}

function getCurrentWeather (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData)

  return axios.get(url)
    .then(function (currentWeatherData) {
      return (currentWeatherData.data)
    })
}

function getForcast (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('forecast/daily', queryStringData)

  return axios.get(url)
    .then(function (forecastData) {
      return (forecastData.data)
    })
}

function getPinyin(cityName) {
  return axios({
    method: 'GET',
    url: 'http://apis.baidu.com/sillystudio/service/topy?words=' + cityName,
    headers: {'apiKey': '2eb9ca3f1ecb864ba11fa11e7154abc6'}
  }).then(function(data) {
      return data.data.py;
  })
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForcast: getForcast,
  getPinyin: getPinyin
};
