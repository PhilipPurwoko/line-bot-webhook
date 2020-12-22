// Import all available messages
const flexMenu = require('../messages/menu');
const flexInfo = require('../messages/info');
const flexProtokol = require('../messages/protokol');
const tidakDimengerti = require('../messages/tidakDimengerti');
const hanyaTeks = require('../messages/hanyaTeks');


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
        return context.sendFlex('Maaf, pesan tidak dapat dimengerti',tidakDimengerti);
    }
    static hyTeks(context){
        return context.sendFlex('Maaf, kami hanya bisa memproses pesan teks',hanyaTeks);
    }
}