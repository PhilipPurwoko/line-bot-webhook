module.exports = {
    "type": "bubble",
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {
                "type": "text",
                "text": "Maaf, hanya dapat memproses teks",
                "wrap": true,
                "contents": []
            }
        ]
    },
    "footer": {
        "type": "box",
        "layout": "vertical",
        "flex": 0,
        "spacing": "sm",
        "contents": [
            {
                "type": "separator"
            },
            {
                "type": "button",
                "action": {
                    "type": "message",
                    "label": "Tampilkan Menu",
                    "text": "menu"
                },
                "height": "sm"
            }
        ]
    }
}