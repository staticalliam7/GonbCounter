const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');
const commands = require('./help');

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
    



  
        gonbcount++;
        message.channel.send("Gonb #"+gonbcount);
        

    
  }
});

require('./server')();
bot.login(config.token);