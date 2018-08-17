const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime TEKME atacağınız yazmadın!**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor('RANDOM')
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana kötü tekme attı! Canın acımış olmalı dostum.**')
    	.setImage(`https://galeri7.uludagsozluk.com/250/hoslanilan-kiza-yanlislikla-ucan-tekme-atmak_351149.gif`)

    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tekmeat',
  description: 'İstedğiniz kişiye tekme atarsınız',
  usage: 'tekmeat'
};
