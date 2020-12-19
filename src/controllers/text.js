const axios = require('axios');
const flex = require('../messages/covid');


getAxios = async (url) =>{
    response = await axios.get(url)
    return response.data
}

module.exports = async function HandleMessage(context) {
    if (context.event.isText){
        const message = context.event.text;
        if (message === 'covid'){
            getAxios('https://covid19.mathdro.id/api/countries/Indonesia').then(stat=>{
                console.log('Covid message')
                const json = flex(
                    new Date(stat.lastUpdate),
                    parseInt(stat.confirmed.value),
                    parseInt(stat.recovered.value),
                    parseInt(stat.deaths.value)
                )
                console.log(json)
                await context.sendFlex('Statistik Covid 19 Indonesia',json)
            })
        } else {
            console.log(`Your Message : ${message}`)
            await context.sendText(`Your Message : ${message}`);
        }
    } else {
        console.log('Non text message')
        await context.sendText('Maaf, kami hanya bisa memproses pesan Anda. Terima kasih');
    }
}