module.exports = async function HandleMessage(context) {
    if (context.event.isText){
        const message = context.event.text;
        if (message === 'covid'){
            await context.sendText('Data Covid');
        } else {
            await context.sendText(`Your Message : ${message}`);
        }
    } else {
        await context.sendText('Maaf, kami hanya bisa memproses pesan Anda. Terima kasih');
    }
}