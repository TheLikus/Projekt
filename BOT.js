const tmi = require("tmi.js")


// changed this var from channel to channelName 
var channelName = "TheLikus"
// this is the prefix for your commands
var prefix = "!"

var config = {
    options: {
        debug: true
    }, 
    connection: {
        cluster: "aws", 
        reconnect: true
    },
    identity: {
        username: "TheLikus_BOT",
        // get yours at http://twitchapps.com/tmi
        password: "oauth:password"
    },
    channels: [channelName]
}

var client = new tmi.client(config)
client.connect();

client.on("connected", (address, port) => {
})

setInterval(() => {
     client.say(channelName, "Hello")
    }, 600000);

    // Chat Commands
client.on("chat", (channel, user, message, self) => {
    if (self) return;
    
    if (message === "hi") {
        client.say(channelName, "hey pal.")
    } 

     //Göteborgar mätare.
    
     if (message === '!Göteborgare') {
        const num = rollDice();
        client.say(channelName, ` ${user.username} Du är ${num}% Göteborgare!`);
        console.log(`* Executed ${message} command`);
      } else {
        console.log(`* Unknown command ${message}`);
      }
    
      function rollDice () {
        const sides = 100;
        return Math.floor(Math.random() * sides) + 1;
      }

    // cmd handler
    const args = message.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    try {
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(client, message, args, user, channel, self) 
    } catch (err) {
        return;
    }

   
})
