module.exports = (tanggal,positif,sembuh,meninggal)=>{return {
    "type": "bubble",
    "body": {
        "type": "box",
        "layout": "vertical",
        "spacing": "md",
        "action": {
            "type": "uri",
            "label": "Action",
            "uri": "https://linecorp.com"
        },
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
}}