const similarity = require('../utils/similarity');
const logPesan = require('../utils/logPesan');
const Respond = require('./respond');


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
                if (ratioCovid > ratioData){
                    await context.sendText('Mungkin maksud Anda "Covid"');
                } else {
                    await context.sendText('Mungkin maksud Anda "Data"');
                }
                Respond.data(context);
            } else if (ratioMenu >= 0.7){
                await context.sendText('Mungkin maksud Anda "Menu"');
                Respond.menu(context);
            } else if (ratioInfo >= 0.7){
                await context.sendText('Mungkin maksud Anda "Info"');
                Respond.info(context);
            } else if (ratioProtokol >= 0.7){
                await context.sendText('Mungkin maksud Anda "Protokol"');
                Respond.protokol(context);
            } else {
                Respond.tidakMengerti(context);
            }
        }
    } else {
        logPesan('Non text message');
        Respond.hyTeks(context);
    }
}