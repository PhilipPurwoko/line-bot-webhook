module.exports = (tanggal_hari_ini,jumlah_total_positif,jumlah_total_sembuh,jumlah_total_meninggal)=>{
    return {
        "type":"bubble",
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
                            "text":tanggal_hari_ini
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
                                    "text":jumlah_total_positif,
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
                                    "text":jumlah_total_sembuh,
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
                                    "text":jumlah_total_meninggal,
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
    }
}