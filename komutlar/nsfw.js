const Discord = require('discord.js') 
exports.run = (client, msg, args) => {
  if(msg.channel.nsfw || msg.channel.type ==='dm'){
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setImage(("http://media.oboobs.ru/boobs_preview/0"+ Math.floor(Math.random() * (8317 - 1011) + 1011)+".jpg"))
    msg.channel.send(embed)
}
  else{
        msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Bu kanal NSFW(Not Safe For Work) kanalı değil! Ayarlardan bunu açabilirsin!')
 }})
 }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['ns'],
   permLevel: 0
 };

 exports.help = {
   name: 'nsfw',
   description: 'NSFW bir resim gösterir.',
   usage: 'nsfw'
 };
 