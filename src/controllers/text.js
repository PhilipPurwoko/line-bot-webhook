const similarity = require('../utils/similarity');
const logPesan = require('../utils/logPesan');
const Respond = require('./respond');


const axios = require('axios');

// Import all available messages
const getCovidFlex = require('../messages/covid');
const flexMenu = require('../messages/menu');
const flexInfo = require('../messages/info');
const flexProtokol = require('../messages/protokol');
const tidakDimengerti = require('../messages/tidakDimengerti');
const hanyaTeks = require('../messages/hanyaTeks');


module.exports = async function HandleMessage(context) {
    if (context.event.isText){
        const message = context.event.text.toLowerCase();
        if (message === 'data' || message == 'covid'){
            logPesan(message);
            Respond.data(context);
        } else if (message == 'info'){
            logPesan(message);
            Respond.info(context);
        } else if (message == 'protokol'){
            logPesan(message);
            Respond.protokol(context);
        } else if (message == 'menu'){
            logPesan(message);
            Respond.menu(context);
        } else {
            logPesan(message);
            // Find message similarity ratio
            const ratioData = similarity(message, 'covid');
            const ratioCovid = similarity(message, 'data');
            const ratioMenu = similarity(message, 'menu');
            const ratioInfo = similarity(message, 'info');
            const ratioProtokol = similarity(message, 'protokol');

            if (ratioData >= 0.7 || ratioCovid >= 0.7){
                console.log(`Data Similarity : ${ratioData}`);
                console.log(`Covid Similarity : ${ratioCovid}`);
                if (ratioCovid < ratioData){
                    await context.sendText('Mungkin maksud Anda "Covid"');
                } else {
                    await context.sendText('Mungkin maksud Anda "Data"');
                }
                const response = await axios.get('https://covid19.mathdro.id/api/countries/Indonesia');
                const data = await response.data;
                const flexData = getCovidFlex(
                    data.lastUpdate,
                    data.confirmed.value.toString(),
                    data.recovered.value.toString(),
                    data.deaths.value.toString()
                )
                await context.sendFlex('Statistik Covid 19 Indonesia',flexData);
            } else if (ratioMenu >= 0.7){
                await context.sendText('Mungkin maksud Anda "Menu"');
                await context.sendFlex('Menu Utama Pada Bot',flexMenu);
            } else if (ratioInfo >= 0.7){
                await context.sendText('Mungkin maksud Anda "Info"');
                await context.sendFlex('Informasi Covid',flexInfo);
            } else if (ratioProtokol >= 0.7){
                await context.sendText('Mungkin maksud Anda "Protokol"');
                await context.sendFlex('Protokol Kesehatan Covid',flexProtokol);
            } else {
                await context.sendFlex('Maaf, pesan tidak dapat dimengerti',tidakDimengerti);
            }
        }
    } else {
        logPesan('Non text message');
        await context.sendFlex('Maaf, kami hanya bisa memproses pesan teks',hanyaTeks);
    }
}