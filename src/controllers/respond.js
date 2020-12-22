const axios = require('axios');
// Import all available messages
const getCovidFlex = require('../messages/covid');
const flexMenu = require('../messages/menu');
const flexInfo = require('../messages/info');
const flexProtokol = require('../messages/protokol');
const tidakDimengerti = require('../messages/tidakDimengerti');
const hanyaTeks = require('../messages/hanyaTeks');


module.exports = class Respond{
    static menu(context){
        return context.sendFlex('Menu Utama Pada Bot',flexMenu);
    }
    static data(context){
        const response = await axios.get('https://covid19.mathdro.id/api/countries/Indonesia');
        const data = await response.data;
        const flexData = getCovidFlex(
            data.lastUpdate,
            data.confirmed.value.toString(),
            data.recovered.value.toString(),
            data.deaths.value.toString()
        )
        return context.sendFlex('Statistik Covid 19 Indonesia',flexData);
    }
    static info(context){
        return context.sendFlex('Informasi Covid',flexInfo);
    }
    static protokol(context){
        return context.sendFlex('Protokol Kesehatan Covid',flexProtokol);
    }
    static tidakMengerti(context){
        return context.sendFlex('Maaf, pesan tidak dapat dimengerti',tidakDimengerti);
    }
    static hyTeks(context){
        return context.sendFlex('Maaf, kami hanya bisa memproses pesan teks',hanyaTeks);
    }
}