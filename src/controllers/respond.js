const axios = require('axios');

// Import all available messages
const getCovidFlex = require('../messages/covid');
const flexMenu = require('../messages/menu');
const flexInfo = require('../messages/info');
const flexProtokol = require('../messages/protokol');
const tidakDimengerti = require('../messages/tidakDimengerti');
const hanyaTeks = require('../messages/hanyaTeks');


module.exports = class Respond{
    static async menu(context){
        return await context.sendFlex('Menu Utama Pada Bot',flexMenu);
    }
    static async data(context){
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
    static async info(context){
        return await context.sendFlex('Informasi Covid',flexInfo);
    }
    static async protokol(context){
        return await context.sendFlex('Protokol Kesehatan Covid',flexProtokol);
    }
    static async tidakMengerti(context){
        return await context.sendFlex('Maaf, pesan tidak dapat dimengerti',tidakDimengerti);
    }
    static async hyTeks(context){
        return await context.sendFlex('Maaf, kami hanya bisa memproses pesan teks',hanyaTeks);
    }
}