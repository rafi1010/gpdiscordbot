const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Türk Bayrağını Tüm Herkese Göster!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Al sana türk bayrağı !')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
		.setImage(`https://www.setmedya.com.tr/wp-content/uploads/2018/01/turkbayragi.jpg`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tr',
  description: 'Bayrak resmi atar.',
  usage: 'tr'
};
