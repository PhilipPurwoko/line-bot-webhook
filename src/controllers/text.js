module.exports = async function HandleMessage(context) {
    const message = context.event.text;
    if (message){
        if (message === 'covid'){
            await context.sendText('Data Covid');
        } else {
            await context.sendText(`Your Message : ${message}`);
        }
    } else {
        await context.sendText('Maaf, kami hanya bisa memproses pesan Anda. Terima kasih');
    }
}