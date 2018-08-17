const Discord = require('discord.js');

exports.run = (client, message, args) => {
let mention = message.mentions.users.first();
let sender = "";

if (message.channel.guild.member(message.author).nickname == null) {
 sender = message.author.username;
} else {
 sender = message.channel.guild.member(message.author).nickname;
}

if (mention != null || mention != undefined) {
 var name = mention.username + "'s ";
 if (mention.username.endsWith("s")) {
   name = mention.username + "' ";
 }
 const avatarEmbedOther = new Discord.RichEmbed()
   .setColor(0xf4b942)
 .setImage(mention.avatarURL)
 message.channel.send(avatarEmbedOther);
 return;
} else {
 const avatarEmbedYou = new Discord.RichEmbed()
   .setColor(0xf4b942)
 .setImage(message.author.avatarURL)
 message.channel.send(avatarEmbedYou);
 return;
}
message.channel.sendMessage("Avatar bulma sırasında bir hata oluştu.");
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['avatar', 'kullanici-resmi', 'resim', 'kullanici-avatar'],
 permLevel: 0
};

exports.help = {
 name: 'avatar',
 description: 'Birinin avatarını görmenizi sağlar.',
 usage: 'avatar [@kullanici]'
};
