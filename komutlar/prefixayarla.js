const db = require('quick.db');

exports.run = (client, message, args) => {

  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**Afedersin, Gerekli Yetkin Bulunmamakta**`);

  db.set(`prefix_${message.guild.id}`, args.join(' ')).then(i => {
      message.channel.send(`Prefix Başarıyla **${i}** Yapıldı`)
  })

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'prefixayarla',
  description: 'Prefixinizi Ayarlamak İçin Kullanılır.',
  usage: 'prefix [Kullanılacak Prefix]'
};
