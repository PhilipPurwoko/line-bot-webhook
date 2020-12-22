function threeDot(value){
    return value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}


module.exports = (tanggalRaw, positifRaw, sembuh, meninggal) => {
    // Format raw datetime string
    const date_time = tanggalRaw.split('T');
    const date = date_time[0].split('-').reverse().join('-')
    const time = date_time[1].split(':').slice(0,2).join(':')
    const tanggal = `Tanggal ${date} Jam ${time}`

    // Add . every 3 digit from behind
    const positif = threeDot(positifRaw);
    const sembuh = threeDot(sembuhRaw);
    const meninggal = threeDot(meninggalRaw);
    
    return {
        "type": "bubble",
        "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": [
                {
                    "type": "text",
                    "text": "Data Covid 19 Indonesia",
                    "weight": "bold",
                    "size": "xl",
                    "contents": []
                },
                {
                    "type": "text",
                    "text": tanggal,
                    "size": "md",
                    "color": "#AAAAAA",
                    "align": "center",
                    "wrap": true,
                    "contents": []
                },
                {
                    "type": "separator"
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Total Positif",
                                    "weight": "bold",
                                    "color": "#F4B400",
                                    "margin": "sm",
                                    "contents": []
                                },
                                {
                                    "type": "text",
                                    "text": positif,
                                    "size": "md",
                                    "color": "#AAAAAA",
                                    "align": "end",
                                    "contents": []
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Total Sembuh",
                                    "weight": "bold",
                                    "color": "#0F9D58",
                                    "flex": 0,
                                    "margin": "sm",
                                    "contents": []
                                },
                                {
                                    "type": "text",
                                    "text": sembuh,
                                    "size": "md",
                                    "color": "#AAAAAA",
                                    "align": "end",
                                    "contents": []
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Total Meninggal",
                                    "weight": "bold",
                                    "color": "#DB4437",
                                    "margin": "sm",
                                    "contents": []
                                },
                                {
                                    "type": "text",
                                    "text": meninggal,
                                    "size": "md",
                                    "color": "#AAAAAA",
                                    "align": "end",
                                    "contents": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "separator"
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "Ayo patuhi protokol kesehatan dan putus rantai penularan Covid !",
                            "align": "center",
                            "wrap": true,
                            "contents": []
                        }
                    ]
                }
            ]
        }
    }
}