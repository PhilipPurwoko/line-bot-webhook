const axios = require('axios');
const getFlex = require('../messages/covid');
const flexMenu = require('../messages/menu');
const flexInfo = require('../messages/info');
const flexProtokol = require('../messages/protokol');
const tidakDimengerti = require('../messages/tidakDimengerti');
const hanyaTeks = require('../messages/hanyaTeks');


function logPesan(pesan){
    console.log(`Pesan Masuk : ${pesan}`);
}


module.exports = async function HandleMessage(context) {
    if (context.event.isText){
        const message = context.event.text.toLowerCase();
        if (message === 'data'){
            logPesan(message);
            const response = await axios.get('https://covid19.mathdro.id/api/countries/Indonesia');
            const data = await response.data;
            const flexData = getFlex(
                data.lastUpdate,
                data.confirmed.value.toString(),
                data.recovered.value.toString(),
                data.deaths.value.toString()
            )
            await context.sendFlex('Statistik Covid 19 Indonesia',flexData);
        } else if (message == 'info'){
            logPesan(message);
            await context.sendFlex('Informasi Covid',flexInfo);
        } else if (message == 'protokol'){
            logPesan(message);
            await context.sendFlex('Protokol Kesehatan Covid',flexProtokol);
        } else if (message == 'menu'){
            logPesan(message);
            await context.sendFlex('Menu Utama Pada Bot',flexMenu);
        } else {
            logPesan(message);
            await context.sendFlex('Maaf, pesan tidak dapat dimengerti',tidakDimengerti);
        }
    } else {
        logPesan('Non text message');
        await context.sendFlex('Maaf, kami hanya bisa memproses pesan teks',hanyaTeks);
    }
}