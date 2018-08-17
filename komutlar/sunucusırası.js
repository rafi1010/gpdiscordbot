const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`⚡️ **${guild.name}** - Sunucu üye sayısı : **${guild.memberCount}** ⚡️`, guild.id);
      embed.setColor('RANDOM')
      embed.setTitle('© Esther Bot')
      embed.setDescription(`Sende Esther BOT'u davet ederek Desek sağlayabilirsin! **${bot.guilds.size} Adet sunucuda bulunmaktadır**  !`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s', 'sw', 'sunucular', 'invites'],
  permLevel: 0
};

exports.help = {
  name: "invites",
  description: "Sunucuları gösterir",
  usage: "invites"
};