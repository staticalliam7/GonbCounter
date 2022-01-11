const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');
var fs = require("fs");
//gonbPersistent.txt
const talkedRecently = new Set();
let bot = new Client({

  presence: {
    status: 'online',
    activity: {
      name: `Gonb`,
      type: 'WATCHING'
    }
  }
});
var gonbcount = null;
fs.readFile("./gonbPersistent.txt", "utf-8", (err, data) => {
        if (err) { console.log(err) }
        gonbcount = parseInt(data);
})

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}.`));


bot.on('message', async message => {
  // Check for command

    
    if (message.content.includes('gonb')) {
        if(message.author.bot){}
        else{
        gonbcount++;
    fs.writeFile("./gonbPersistent.txt", gonbcount, (err) => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });
        }
    
 }
  if (message.content.startsWith(config.prefix)) {
    let args = message.content.slice(config.prefix.length).split(' ');
    let command = args.shift().toLowerCase();
    switch(command){
        case 'ping':
        let msg = await message.reply('Pinging...');
        await msg.edit(`PONG! Message round-trip took ${Date.now() - 
       msg.createdTimestamp}ms.`)
        break;
        case 'grass':
         message.channel.send('https://tenor.com/view/touching-grass-touch-gif-21219969')
        break;

        case 'invite':
         let invite = new MessageEmbed()
          .setTitle('GonbCounter')
          .setColor('ORANGE')
          .setURL('https://discord.com/api/oauth2/authorize?client_id=928627900255727646&permissions=0&scope=bot')
          .setDescription('Invite GonbCounter to your server!')
          .setThumbnail('https://pbs.twimg.com/profile_images/1330407244769284096/zr97Bdl5_400x400.jpg')
          .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`,message.author.displayAvatarURL())
          ;
        message.channel.send(invite);
        break;
        
            
        case 'count':
        fs.readFile("./gonbPersistent.txt", "utf-8", (err, data) => {
        if (err) { console.log(err) }
     
         let invite = new MessageEmbed()
          .setTitle('GonbCounter')
          .setColor('ORANGE')
          .setDescription('Global Gonb Count:' + data)
          .setThumbnail('https://pbs.twimg.com/profile_images/1330407244769284096/zr97Bdl5_400x400.jpg')
          .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`,message.author.displayAvatarURL())
          ;
        message.channel.send(invite);
       })
        
        //message.channel.send('Global gonb count: '+gonbcount);
        break;
       

    }
    
      
       /* if (talkedRecently.has(message.author.id)) {
            message.channel.send("**"+message.member.displayName+" seems to be very enthusiastic about gonb! I can only count every 5 seconds.**");
    } else {

           // the user can type the command ... your command code goes here :)
        gonbcount++;
        message.channel.send("Gonb #"+gonbcount);
        
        talkedRecently.add(message.author.id);
        setTimeout(() => {
   
          talkedRecently.delete(message.author.id);
        }, 5000);
    }*/
    



  
      
        

    
  }
});

require('./server')();
bot.login(config.token);