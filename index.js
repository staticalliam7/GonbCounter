const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');

const talkedRecently = new Set();
let bot = new Client({
  fetchAllMembers: true, // Remove this if the bot is in large guilds.
  presence: {
    status: 'online',
    activity: {
      name: `${config.prefix}help`,
      type: 'LISTENING'
    }
  }
});

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}.`));
var gonbcount = 0;
bot.on('message', async message => {
  // Check for command
  if (message.content.startsWith('gonb')) {
        if (talkedRecently.has(msg.author.id)) {
            msg.channel.send(msg.author+"**seems to be very enthusiastic about gonb! I can only count every 5 seconds.**");
    } else {

           // the user can type the command ... your command code goes here :)
        gonbcount++;
        message.channel.send("Gonb #"+gonbcount);
        
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
   
          talkedRecently.delete(msg.author.id);
        }, 5000);
    }



  
      
        

    
  }
});

require('./server')();
bot.login(config.token);