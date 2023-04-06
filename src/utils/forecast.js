const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=052aa78971bef7228ce69252c80d13bf&query=" +
    longitude +
    "," +
    latitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.success === false) {
      callback("Unable to find the location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}.It is currently ${body.current.temperature} out there and considering the wind chill factor its feels like ${body.current.feelslike}`
      );
    }
  });
};
module.exports = forecast;
