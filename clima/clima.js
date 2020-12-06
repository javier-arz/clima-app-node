/**
 * Axios para peticiones HTTP con promesas
 */
const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=f2b82a73f94ab332b1f32bf96b0c558d&units=metric`);
    console.log(resp);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}