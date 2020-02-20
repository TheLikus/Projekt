exports.run = (client, message, args, user, channel, self) => {
    client.ping().then(function(data) {
        let ping = Math.floor(Math.round(data*1000))
        client.say(channel, 'Joina gärna min discord för uppdateringar om när jag går Live och massa annat: https://discord.gg/frantixx Är du Subscriber så behöver du länka din Twitch med Discord för att få "Sub" tag i Discord. Beskrivning för hur du gör finner du i min Discord kanal.')
    })

}