module.exports = {
    "type": "bubble",
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "Menu Utama Pada Bot",
                        "weight": "bold",
                        "size": "xl",
                        "align": "center",
                        "contents": []
                    },
                    {
                        "type": "spacer"
                    }
                ]
            },
            {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "button",
                        "action": {
                            "type": "message",
                            "label": "Apa itu Covid-19 ?",
                            "text": "info"
                        },
                        "color": "#567B97",
                        "height": "sm",
                        "style": "primary"
                    },
                    {
                        "type": "spacer"
                    }
                ]
            },
            {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "button",
                        "action": {
                            "type": "message",
                            "label": "Protokol Pencegahan",
                            "text": "protokol"
                        },
                        "height": "sm",
                        "style": "secondary"
                    },
                    {
                        "type": "spacer"
                    }
                ]
            },
            {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "button",
                        "action": {
                            "type": "message",
                            "label": "Data Statistik Covid",
                            "text": "data"
                        },
                        "height": "sm",
                        "style": "primary"
                    }
                ]
            }
        ]
    }
}