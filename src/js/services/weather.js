function getData(city = '') {
    const APPID = '82390064987812e43f9ec57cb01311b6';
    const URL = 'http://api.openweathermap.org/data/2.5/weather';

    return fetch(`${URL}?q=${city}&APPID=${APPID}`);
}