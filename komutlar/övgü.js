const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let guild = message.guild
  let terfiler = guild.channels.find('name', 'mod-log');
  if (!terfiler) return message.reply('`mod-log` kanalını bulamıyorum.');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('övme sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi öveceğini yazmalısın').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
	.setThumbnail("")
    .setTimestamp()
    .addField('Eylem:', 'Kullanıcı övme')
    .addField('Övülen kişi:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Öven kişi:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Övme', reason);

	return guild.channels.get(terfiler.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['övgü', 'övo'],
  permLevel: 2
};

exports.help = {
  name: 'öv',
  description: 'Kullanıcıyı terfi ettirir.',
  usage: 'öv'
};
