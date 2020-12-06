/**
 * Axios para peticiones HTTP con promesas
 */
const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://geocode.xyz?locate="${ encodedUrl }"&auth=10121280111766279748x127494&json=1`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '18c13acbcbmsh784a088f67a8b22p154eb6jsn8ac4408fba2f',
            'useQueryString': true
        }
    });

    const resp = await instance.get();
    console.log("------------------------------------------------------");
    console.log("------------------------------------------------------");
    console.log(resp.data);
    console.log("------------------------------------------------------");
    console.log("------------------------------------------------------");

    if (resp.data.error) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = `${ data.standard.city },  ${ data.standard.prov }`;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}