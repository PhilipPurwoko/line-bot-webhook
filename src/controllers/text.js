module.exports = async function HandleMessage(context) {
    const message = context.event.text;
    if (message === 'covid'){
        await context.sendText('Data Covid');
    } else {
        await context.sendText(`Your Message : ${message}`);
    }
}