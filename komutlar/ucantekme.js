const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime Uçan tekme atacağınız yazmadın!**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor('RANDOM')
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana uçan tekme attı! Canın acımış olmalı dostum.**')
    	.setImage(`http://i0.kym-cdn.com/photos/images/original/000/716/993/1f5.gif`)

    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'uç',
  description: 'İstedğiniz kişiye uçan tekme atarsınız',
  usage: 'uç'
};
