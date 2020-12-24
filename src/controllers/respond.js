// Import all available messages
const flexMenu = require('../messages/menu');
const flexInfo = require('../messages/info');
const flexProtokol = require('../messages/protokol');
const panduan = require('../messages/panduan');
const quickReply = require('../messages/quickReply');


module.exports = class Respond{
    static caraPakai(context){
        return context.send([{
            type: 'flex',
            altText: 'Panduan Penggunaan Bot',
            contents: panduan,
            quickReply
        }])
    }
    static menu(context){
        return context.send([{
            type: 'flex',
            altText: 'Menu Utama Pada Bot',
            contents: flexMenu,
            quickReply,
        }]);
    }
    static info(context){
        return context.send([{
            type: 'flex',
            altText: 'Informasi Covid',
            contents: flexInfo,
            quickReply,
        }]);
    }
    static protokol(context){
        return context.send([{
            type: 'flex',
            altText: 'Protokol Kesehatan Covid',
            contents: flexProtokol,
            quickReply,
        }]);
    }
    static tidakMengerti(context){
        return context.send([{
            type: 'text',
            text: 'Maaf, pesan tidak dapat dimengerti. Silakan gunakan quick replay untuk menggunakan bot',
            quickReply,
        }]);
    }
    static hyTeks(context){
        return context.send([{
            type: 'text',
            altText: 'Maaf, kami hanya bisa memproses pesan teks. Silakan gunakan quick replay untuk menggunakan bot',
            quickReply,
        }]);
    }
}