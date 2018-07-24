const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

  let pages = ['**Ana komutlar**\n\nma*kullanıcıara = Kullanıcı Aarsınız. \nma*tavsiye = Bot İçin Tavsiye Verirsiniz. \nma*yardım = BOT Komutlarını Atar. \nma*bilgi = BOT Kendisi Hakkında Bilgi Verir. \nma*ping = BOTun Pingini Gösterir. \nma*istatistik = BOT İstatistiklerini Atar.', '**Yetkili Komutları**\n\nma*kilit = Kanalı Kilitlersiniz. \nma*sustur = Kullanıcıyı Susturursun. \nma*sunucular = Botun Hangi Sunucuda Olduğunu Örenmek İçin. \nma*hedef = Hedefimiz ! \nma*ban = İstediğiniz Kişiyi Sunucudan Banlar. \nma*unban = İstediğiniz Kişinin Banını Kaldırısınız. \nma*çekiliş = Rastgele Çekiliş Yaparsınız. \nma*kick  = İstediğiniz Kişiyi Sunucudan Atar. \nma*sustur = İstediğiniz Kişiyi Susturur. -MUTED- \nma*oylama = Oylama Açar. \nma*duyuru = Güzel Bir Duyuru Görünümü Sağlar.', '**Kullanıcı Komutları**\n\nma*Atam = :heart: MUSTAFA KEMAL ATATÜRK :heart:\nma*afk = AFK Olursunuz. \nma*emojiler = Sunucudaki Emojileri Gösterir. \nma*avatarım = Avatarınınızı Gösterir. \nma*yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nma*sunucuresmi = BOT Sunucunun Resmini Atar. \nma*sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nma*kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir', '**Eğlence Komutları**\n\nma*sor = Bota Soru Sorarsın. \nma*sigara = Sigara İçersiniz Ama Sigara Sağlığa Zararlıdır (Ben Yani **__MuradKerimli__** İçmem Alergiyam Var). \nma*trollgifler = Troll Gifler Gösterir. \nma*söv = Kendine Veya Etiketlediğiniz Kişiye Söver. \nma*piksel = Kendinizin Veya Etiketlediğiniz Birisinin Profil Resimini Piksel Şekilde Gösterir. \nma*kaçcm = Suçucuğun Kaç Santim ? \nma*hastebin = Hastebine İstediğiniz Kodunuzu Veya Notunuzu Yazarsınız Yazarsınız. \nma*bulanık = Etikenlediğiniz Kişinin Profil Resmini Bulanıklaştırır. \nma*alkış = Alkışlarsınız... \nma*spiderman = Bütün Spiderman Kostümlerini Gösterir. \nma*golf = Golf Oynarsınız. \nma*sanateseri = Deyişik Sanat Eseri Gösterir. \nma*deyişikahtapot = Yorumsuz... \nma*ateşet = Ateş Edersiniz. \nma*sevin = Sevinirsiniz. \ma*çıldır = Çıldırırsın. \nma*dartat = Dart Atarsın. \nma*banned = Dene ve Gör ! \nma*herkesebendençay = Herkese Çay Alırsınız. \nma*koş = Koşarsınız.\nma*çayiç = Çay İçersiniz. \nma*çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nma*çayaşekerat = Çaya Şeker Atarsınız. \nma*yumrukat = Yumruk Atarsınız. \nma*wtf = Yorumsuz...', '**Meslek Komutları**\n\nma*dondurmacıol = Maraş Dondurması Satarsın. \nma*tamirciol = Tamirci Olursunuz. \nma*djol = DJ Olursunuz.', '**Matematik Komutları**\n\nÖRNEK : \nma*topla 10 10 \nma*çıkar 100 10 \nma*çarp 10 10 \nma*böl 10 2', '**Minecraft Bölümü**\n\nma*mcserver = Minecraft Serverlerinin İstastiklerini Gösterir. \nma*mchediye = Başarım Gibi Bişey.']; // Sayfalar
  let page = 1; // Sayfa 1
  let page2 = 2; // Sayfa 2
  let page3 = 3; // Sayfa 3
  let page4 = 4; // Sayfa 4
  let page5 = 5; // Sayfa 5
  let page6 = 6; // Sayfa 6
  let page7 = 7; // Sayfa 7

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
