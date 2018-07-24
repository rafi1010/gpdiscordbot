const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

  let pages = ['**Ana komutlar**\n\nevo!kullanıcıara = Kullanıcı Aarsınız. \nevo!tavsiye = Bot İçin Tavsiye Verirsiniz. \nevo!yardım = BOT Komutlarını Atar. \nevo!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nevo!ping = BOTun Pingini Gösterir. \nevo!istatistik = BOT İstatistiklerini Atar.', '**Yetkili Komutları**\n\nevo!kilit = Kanalı Kilitlersiniz. \nevo!sustur = Kullanıcıyı Susturursun. \nevo!sunucular = Botun Hangi Sunucuda Olduğunu Örenmek İçin. \nevo!hedef = Hedefimiz ! \nevo!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nevo!unban = İstediğiniz Kişinin Banını Kaldırısınız. \nevo!çekiliş = Rastgele Çekiliş Yaparsınız. \nevo!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nevo!sustur = İstediğiniz Kişiyi Susturur. -MUTED- \nevo!oylama = Oylama Açar. \nevo!duyuru = Güzel Bir Duyuru Görünümü Sağlar.', '**Kullanıcı Komutları**\n\nevo!Atam = :heart: MUSTAFA KEMAL ATATÜRK :heart:\nevo!afk = AFK Olursunuz. \nevo!emojiler = Sunucudaki Emojileri Gösterir. \nevo!avatarım = Avatarınınızı Gösterir. \nevo!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nevo!sunucuresmi = BOT Sunucunun Resmini Atar. \nevo!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nevo!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir', '**Eğlence Komutları**\n\nevo!sor = Bota Soru Sorarsın. \nevo!sigara = Sigara İçersiniz Ama Sigara Sağlığa Zararlıdır (Ben Yani **__MuradKerimli__** İçmem Alergiyam Var). \nevo!trollgifler = Troll Gifler Gösterir. \nevo!söv = Kendine Veya Etiketlediğiniz Kişiye Söver. \nevo!piksel = Kendinizin Veya Etiketlediğiniz Birisinin Profil Resimini Piksel Şekilde Gösterir. \nevo!kaçcm = Suçucuğun Kaç Santim ? \nevo!hastebin = Hastebine İstediğiniz Kodunuzu Veya Notunuzu Yazarsınız Yazarsınız. \nevo!bulanık = Etikenlediğiniz Kişinin Profil Resmini Bulanıklaştırır. \nevo!alkış = Alkışlarsınız... \nevo!spiderman = Bütün Spiderman Kostümlerini Gösterir. \nevo!golf = Golf Oynarsınız. \nevo!sanateseri = Deyişik Sanat Eseri Gösterir. \nevo!deyişikahtapot = Yorumsuz... \nevo!ateşet = Ateş Edersiniz. \nevo!sevin = Sevinirsiniz. \evo!çıldır = Çıldırırsın. \nevo!dartat = Dart Atarsın. \nevo!banned = Dene ve Gör ! \nevo!herkesebendençay = Herkese Çay Alırsınız. \nevo!koş = Koşarsınız.\nevo!çayiç = Çay İçersiniz. \nevo!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nevo!çayaşekerat = Çaya Şeker Atarsınız. \nevo!yumrukat = Yumruk Atarsınız. \nevo!wtf = Yorumsuz...', '**Meslek Komutları**\n\nevo!dondurmacıol = Maraş Dondurması Satarsın. \nevo!tamirciol = Tamirci Olursunuz. \nevo!djol = DJ Olursunuz.', '**Matematik Komutları**\n\nÖRNEK : \nevo!topla 10 10 \nevo!çıkar 100 10 \nevo!çarp 10 10 \nevo!böl 10 2', '**Minecraft Bölümü**\n\nevo!mcserver = Minecraft Serverlerinin İstastiklerini Gösterir. \nevo!mchediye = Başarım Gibi Bişey.']; // Sayfalar
  let page = 1; // Sayfa 1

  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter(`Sayfa ${page} / ${pages.length}`, "https://cdn.discordapp.com/attachments/416104849701339136/430973516117049344/image.png")
  .setDescription(pages[page-1])
  .setAuthor("Eğlence VE Oyun", "https://cdn.discordapp.com/attachments/427037723543732235/447692096040599553/Botumun_Avatar.png")

  message.channel.send(embed).then(msg => {

    msg.react('⬅').then(r => {
      msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir.',
usage: 'yardım'
};