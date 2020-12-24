// Import all available messages
const flexMenu = require('../messages/menu');
const flexInfo = require('../messages/info');
const flexProtokol = require('../messages/protokol');
// const tidakDimengerti = require('../messages/tidakDimengerti');
// const hanyaTeks = require('../messages/hanyaTeks');
const panduan = require('../messages/panduan');
const quickReply = require('../messages/quickReply');


module.exports = class Respond{
    static menu(context){
        return context.sendFlex('Menu Utama Pada Bot',flexMenu);
    }
    static info(context){
        return context.sendFlex('Informasi Covid',flexInfo);
    }
    static protokol(context){
        return context.sendFlex('Protokol Kesehatan Covid',flexProtokol);
    }
    static tidakMengerti(context){
        // return context.sendFlex('Maaf, pesan tidak dapat dimengerti',tidakDimengerti);
        return context.send([{
            type: 'text',
            text: 'Maaf, pesan tidak dapat dimengerti. Silakan gunakan quick replay untuk menggunakan bot',
            quickReply,
        }]);
    }
    static hyTeks(context){
        // return context.sendFlex('Maaf, kami hanya bisa memproses pesan teks',hanyaTeks);
        return context.send([{
            type: 'text',
            text: 'Maaf, kami hanya bisa memproses pesan teks. Silakan gunakan quick replay untuk menggunakan bot',
            quickReply,
        }]);
    }
    static caraPakai(context){
        // return context.sendFlex('Panduan Penggunaan Bot',panduan);
        return context.send([{
            type: 'flex',
            altText: 'Panduan Penggunaan Bot',
            contents: panduan,
            quickReply
        }])
    }
}