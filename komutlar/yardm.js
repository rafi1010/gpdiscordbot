const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

  let pages = ['**Ana komutlar**\n\n,kullanıcıara = Kullanıcı Aarsınız. \n,tavsiye = Bot İçin Tavsiye Verirsiniz. \n,yardım = BOT Komutlarını Atar. \n,bilgi = BOT Kendisi Hakkında Bilgi Verir. \n,ping = BOTun Pingini Gösterir. \n,istatistik = BOT İstatistiklerini Atar.', '**Yetkili Komutları**\n\n,kilit = Kanalı Kilitlersiniz. \n,sustur = Kullanıcıyı Susturursun. \n,sunucular = Botun Hangi Sunucuda Olduğunu Örenmek İçin. \n,hedef = Hedefimiz ! \n,ban = İstediğiniz Kişiyi Sunucudan Banlar. \n,unban = İstediğiniz Kişinin Banını Kaldırısınız. \n,çekiliş = Rastgele Çekiliş Yaparsınız. \n,kick  = İstediğiniz Kişiyi Sunucudan Atar. \n,sustur = İstediğiniz Kişiyi Susturur. -MUTED- \n,oylama = Oylama Açar. \n,duyuru = Güzel Bir Duyuru Görünümü Sağlar.', '**Kullanıcı Komutları**\n\n,Atam = :heart: MUSTAFA KEMAL ATATÜRK :heart:\n,afk = AFK Olursunuz. \n,emojiler = Sunucudaki Emojileri Gösterir. \n,avatarım = Avatarınınızı Gösterir. \n,yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \n,sunucuresmi = BOT Sunucunun Resmini Atar. \n,sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \n,kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir', '**Eğlence Komutları**\n\n,sor = Bota Soru Sorarsın. \n,sigara = Sigara İçersiniz Ama Sigara Sağlığa Zararlıdır (Ben Yani **__MuradKerimli__** İçmem Alergiyam Var). \n,trollgifler = Troll Gifler Gösterir. \n,söv = Kendine Veya Etiketlediğiniz Kişiye Söver. \n,piksel = Kendinizin Veya Etiketlediğiniz Birisinin Profil Resimini Piksel Şekilde Gösterir. \n,kaçcm = Suçucuğun Kaç Santim ? \n,hastebin = Hastebine İstediğiniz Kodunuzu Veya Notunuzu Yazarsınız Yazarsınız. \n,bulanık = Etikenlediğiniz Kişinin Profil Resmini Bulanıklaştırır. \n,alkış = Alkışlarsınız... \n,spiderman = Bütün Spiderman Kostümlerini Gösterir. \n,golf = Golf Oynarsınız. \n,sanateseri = Deyişik Sanat Eseri Gösterir. \n,deyişikahtapot = Yorumsuz... \n,ateşet = Ateş Edersiniz. \n,sevin = Sevinirsiniz. \,çıldır = Çıldırırsın. \n,dartat = Dart Atarsın. \n,banned = Dene ve Gör ! \n,herkesebendençay = Herkese Çay Alırsınız. \n,koş = Koşarsınız.\n,çayiç = Çay İçersiniz. \n,çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n,çayaşekerat = Çaya Şeker Atarsınız. \n,yumrukat = Yumruk Atarsınız. \n,wtf = Yorumsuz...', '**Meslek Komutları**\n\n,dondurmacıol = Maraş Dondurması Satarsın. \n,tamirciol = Tamirci Olursunuz. \n,djol = DJ Olursunuz.', '**Matematik Komutları**\n\nÖRNEK : \n,topla 10 10 \n,çıkar 100 10 \n,çarp 10 10 \n,böl 10 2', '**Minecraft Bölümü**\n\n,mcserver = Minecraft Serverlerinin İstastiklerini Gösterir. \n,mchediye = Başarım Gibi Bişey.']; // Sayfalar
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