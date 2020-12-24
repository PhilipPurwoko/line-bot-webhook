const similarity = require('../utils/similarity');
const logPesan = require('../utils/logPesan');
const Respond = require('./respond');
const axios = require('axios');
const getCovidFlex = require('../messages/covid');
const quickReply = require('../messages/quickReply');


module.exports = async function HandleMessage(context) {
    if (context.event.isText){
        const message = context.event.text.toLowerCase();
        if (message === 'data' || message == 'covid'){
            logPesan(message);
            const response = await axios.get('https://covid19.mathdro.id/api/countries/Indonesia');
            const data = await response.data;
            const flexData = getCovidFlex(
                data.lastUpdate,
                data.confirmed.value.toString(),
                data.recovered.value.toString(),
                data.deaths.value.toString()
            )
            await context.send([{
                type: 'flex',
                altText: 'Statistik Covid 19 Indonesia',
                contents: flexData,
                quickReply
            }])
        } else if (message == 'info'){
            logPesan(message);
            await Respond.info(context);
        } else if (message == 'protokol'){
            logPesan(message);
            await Respond.protokol(context);
        } else if (message == 'menu'){
            logPesan(message);
            await Respond.menu(context);
        } else if (message == 'cara pakai' || message == 'panduan' || message == 'halo' || message == 'test'){
            logPesan(message);
            await Respond.caraPakai(context);
        } else {
            logPesan(message);
            // Find message similarity ratio
            const ratioData = similarity(message, 'covid');
            const ratioCovid = similarity(message, 'data');
            const ratioMenu = similarity(message, 'menu');
            const ratioInfo = similarity(message, 'info');
            const ratioProtokol = similarity(message, 'protokol');
            const ratioCaraPakai = similarity(message, 'cara pakai');
            const ratioPanduan = similarity(message, 'panduan');

            if (ratioData >= 0.7 || ratioCovid >= 0.7){
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
                await context.send([{
                    type: 'flex',
                    altText: 'Statistik Covid 19 Indonesia',
                    contents: flexData,
                    quickReply
                }])
            } else if (ratioMenu >= 0.7){
                await context.sendText('Mungkin maksud Anda "Menu"');
                await Respond.menu(context);
            } else if (ratioInfo >= 0.7){
                await context.sendText('Mungkin maksud Anda "Info"');
                await Respond.info(context);
            } else if (ratioProtokol >= 0.7){
                await context.sendText('Mungkin maksud Anda "Protokol"');
                await Respond.protokol(context);
            } else if (ratioCaraPakai >= 0.7){
                await context.sendText('Mungkin maksud Anda "Cara Pakai"');
                await Respond.caraPakai(context);
            } else if (ratioPanduan >= 0.7){
                await context.sendText('Mungkin maksud Anda "Panduan"');
                await Respond.caraPakai(context);
            } else {
                await Respond.tidakMengerti(context);
            }
        }
    } else {
        logPesan('Non text message');
        await Respond.hyTeks(context);
    }
}