const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Beni yapan kimmi :) ! ḄṄ | ƜƳԼƠƝƛ ӇƛƳƛƧӇƖ™#9269\n <@463802592791887883>')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
		.setImage(`https://media.giphy.com/media/37q8PNgidbkGsyYp6G/giphy.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcı', 'yapımcın kim?'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'yapımcıyı gösterir.',
  usage: 'yapımcım'
};
