const axios = require('axios');
const flex = require('../messages/covid');

// getAxios = async (url) =>{
//     response = await axios.get(url)
//     return response.data
// }

module.exports = async function HandleMessage(context) {
    if (context.event.isText){
        const message = context.event.text.toLowerCase();
        if (message === 'covid'){
            const response = await axios.get('https://covid19.mathdro.id/api/countries/Indonesia');
            const data = await response.data;
            console.log(data)
            const full = flex(
                data.lastUpdate,
                data.confirmed.value,
                data.recovered.value,
                data.deaths.value
            )
            await context.sendFlex('Statistik Covid 19 Indonesia',full)
        } else {
            console.log(`Your Message : ${message}`)
            await context.sendText(`Your Message : ${message}`);
        }
    } else {
        console.log('Non text message')
        await context.sendText('Maaf, kami hanya bisa memproses pesan Anda. Terima kasih');
    }
}