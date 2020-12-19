// const axios = require('axios');
// const flex = require('../messages/covid');


// getAxios = async (url) =>{
//     response = await axios.get(url)
//     return response.data
// }

module.exports = async function HandleMessage(context) {
    if (context.event.isText){
        const message = context.event.text;
        if (message === 'covid'){
            await context.sendFlex('Statistik Covid 19 Indonesia',"type":"bubble",
            "body":{
                "type":"box",
                "layout":"vertical",
                "contents":[
                    {
                        "type":"text",
                        "text":"Data Covid19 Indonesia",
                        "weight":"bold",
                        "size":"xl",
                        "align":"center"
                    },
                    {
                        "type":"box",
                        "layout":"vertical",
                        "contents":[
                            {
                                "type":"text",
                                "text":"10-10-2010"
                            }
                        ],
                        "alignItems":"center"
                    },
                    {
                        "type":"box",
                        "layout":"vertical",
                        "margin":"lg",
                        "spacing":"sm",
                        "contents":[
                            {
                                "type":"box",
                                "layout":"baseline",
                                "spacing":"sm",
                                "contents":[
                                    {
                                        "type":"text",
                                        "text":"Total Positif",
                                        "color":"#aaaaaa",
                                        "size":"sm"
                                        // "flex":4
                                    },
                                    {
                                        "type":"text",
                                        "text":"600000",
                                        "wrap":true,
                                        "color":"#666666",
                                        "size":"sm"
                                        // "flex":4
                                    }
                                ]
                            },
                            {
                                "type":"box",
                                "layout":"baseline",
                                "spacing":"sm",
                                "contents":[
                                    {
                                        "type":"text",
                                        "text":"Total Sembuh",
                                        "color":"#aaaaaa",
                                        "size":"sm"
                                        // "flex":4
                                    },
                                    {
                                        "type":"text",
                                        "text":"25000",
                                        "wrap":true,
                                        "color":"#666666",
                                        "size":"sm"
                                        // "flex":4
                                    }
                                ]
                            },
                            {
                                "type":"box",
                                "layout":"baseline",
                                "contents":[
                                    {
                                        "type":"text",
                                        "text":"Total Meninggal",
                                        // "flex":4,
                                        "size":"sm",
                                        "color":"#aaaaaa"
                                    },
                                    {
                                        "type":"text",
                                        "text":"3000",
                                        // "flex":4,
                                        "size":"sm",
                                        "color":"#666666"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
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