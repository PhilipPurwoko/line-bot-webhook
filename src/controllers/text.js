const axios = require('axios');
const getFlex = require('../messages/covid');
const flexMenu = require('../messages/menu');
const flexInfo = require('../messages/info');
const flexProtokol = require('../messages/protokol');

// const readFile = require('../utils/readfile');
// const path = require('path');
// const filepath = path.join(path.dirname(process.mainModule.filename),'src','messages','menu.json');


module.exports = async function HandleMessage(context) {
    if (context.event.isText){
        const message = context.event.text.toLowerCase();
        if (message === 'data'){
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
            await context.sendFlex('Informasi Covid',flexInfo);
        } else if (message == 'protokol'){
            await context.sendFlex('Protokol Kesehatan Covid',flexProtokol);
        } else {
            await context.sendFlex('Menu Utama Pada Bot',flexMenu);
        }
    } else {
        console.log('Non text message')
        await context.sendText('Maaf, kami hanya bisa memproses pesan Anda. Terima kasih');
    }
}