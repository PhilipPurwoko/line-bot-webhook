const axios = require('axios');

// Import all available messages
const getCovidFlex = require('../messages/covid');
const flexMenu = require('../messages/menu');
const flexInfo = require('../messages/info');
const flexProtokol = require('../messages/protokol');
const tidakDimengerti = require('../messages/tidakDimengerti');
const hanyaTeks = require('../messages/hanyaTeks');

module.exports = class Respond{
    menu(context){
        return await context.sendFlex('Menu Utama Pada Bot',flexMenu);
    }
    data(context){
        const response = await axios.get('https://covid19.mathdro.id/api/countries/Indonesia');
        const data = await response.data;
        const flexData = getCovidFlex(
            data.lastUpdate,
            data.confirmed.value.toString(),
            data.recovered.value.toString(),
            data.deaths.value.toString()
        )
        return await context.sendFlex('Statistik Covid 19 Indonesia',flexData);
    }
    info(context){
        return await context.sendFlex('Informasi Covid',flexInfo);
    }
    protokol(context){
        return await context.sendFlex('Protokol Kesehatan Covid',flexProtokol);
    }
    tidakMengerti(context){
        return await context.sendFlex('Maaf, pesan tidak dapat dimengerti',tidakDimengerti);
    }
    hyTeks(context){
        return await context.sendFlex('Maaf, kami hanya bisa memproses pesan teks',hanyaTeks);
    }
}