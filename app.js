const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
/**
 * Con options se pone un comando por defecto para ejecutar desde la terminal
 */
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true

    }
}).argv;

/*
lugar.getLugarLatLng(argv.direccion)
    .then(console.log); */

clima.getClima(3.43300, -76.51943)
    .then(console.log())
    .catch(console.log());