var daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

var monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};

function convertTemp(kelvin) {
  return ((kelvin - 273.15)).toFixed(1)
}

function convertDate(unixTimesMap) {
  var originalDate = new Date(unixTimesMap * 1000);
  var day = daysMap[originalDate.getDay()];
  var month = monthsMap[originalDate.getMonth()] + ' ' + originalDate.getDate();
  return day + ', ' + month;
}

module.exports = {
  convertTemp: convertTemp,
  convertDate: convertDate
}
