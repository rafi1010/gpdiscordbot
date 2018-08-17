const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Kullanıcı Bulunmadı.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Yetkilileri Susturamam!");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Yazma Yasağı",
        color: 'RANDOM',
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Lütfen Bir zaman seçin!");

  await(tomute.addRole(muterole.id));
  message.reply(`Tarafından\n<@${tomute.id}> Mutelendi ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Mutesi kaldırıldı!`);
  }, ms(mutetime));


//end of module
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['etempmute', 'tm'],
  permLevel: 0
};

exports.help = {
  name: 'tempmute',
  description: 'Botun davet linkini gönderir.',
  usage: 'tempmute'
};