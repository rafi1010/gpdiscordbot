const fs = require("fs");
const Discord = require('discord.js');
const cheerio = require('cheerio');
var request = require('request');
const devs = ['305112912429580288']
module.exports.run = async(client, message) => {
if(!message.channel.guild) return;
if(!devs.includes(message.author.id)) return; 
let args = message.content.split(' ').slice(1).join(' ');
  message.channel.sendMessage(':incoming_envelope: ➤ Mesaj ' + `${client.users.size} Kullanıcıya Gönderildi.`);
  client.users.forEach(m =>{
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Yapımcıdan Bir Mesajın Var.")
  .setDescription(`Merhaba, <@${m.id}> \n\n` + args)
  .setFooter('Ziponra © 2018')
  m.sendMessage(embed)
  });
  }
     

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mesaj', 'gduyuru', 'ziponra'],
  permLevel: 4
};

exports.help = {
  name: 'globalmesaj',
  description: 'Herkese çay ısmarlarsınız.',
  usage: 'herkesebendençay'
};