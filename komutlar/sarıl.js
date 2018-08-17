const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime Sarılacağını yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('Kucaaak')
    .setColor('RANDOM')
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana sarıldı!**')
    	.setImage(`http://gifgalaksi.com/upload/a6wv61b_460sa_v1.gif`)

    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sarıl',
  description: 'istediğiniz kişiye Sarılırsın',
  usage: 'sarıl'
};
