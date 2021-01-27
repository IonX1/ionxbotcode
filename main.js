const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'x!';

client.once('ready', () => {
    console.log('IonXBot is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/IonX1');
    }
});

client.login('ODAzNzU4NDM1NTUxODA1NDYw.YBCcYA.Bjz-JbEn2DE80vPXyRwlszp2bxk');

