const similarity = require('../utils/similarity');
const logPesan = require('../utils/logPesan');
const Respond = require('./respond');
const respond = new Respond();


module.exports = async function HandleMessage(context) {
    if (context.event.isText){
        const message = context.event.text.toLowerCase();
        if (message === 'data' || message == 'covid'){
            logPesan(message);
            respond.data(context)
        } else if (message == 'info'){
            logPesan(message);
            respond.info(context);
        } else if (message == 'protokol'){
            logPesan(message);
            respond.protokol(context);
        } else if (message == 'menu'){
            logPesan(message);
            respond.menu(context);
        } else {
            logPesan(message);
            // Find message similarity ratio
            const ratioData = similarity(message, 'covid');
            const ratioCovid = similarity(message, 'data');
            const ratioMenu = similarity(message, 'menu');
            const ratioInfo = similarity(message, 'info');
            const ratioProtokol = similarity(message, 'protokol');

            if (ratioData >= 0.7 || ratioCovid >= 0.7){
                console.log(`Data Similarity : ${ratioData}`)
                console.log(`Covid Similarity : ${ratioCovid}`);
                // Send 2 response to user
                await context.sendText('Mungkin maksud Anda "Covid"')
                respond.data(context);
            } else if (ratioMenu >= 0.7){
                respond.menu(context);
            } else if (ratioInfo >= 0.7){
                respond.info(context);
            } else if (ratioProtokol >= 0.7){
                respond.protokol(context);
            } else {
                respond.tidakMengerti(context);
            }
        }
    } else {
        logPesan('Non text message');
        respond.hyTeks(context);
    }
}