const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
var Games = [
        "Sitemiz: discord.gg/Fz9BMrj ",
	"Yapımcım: 𝓢𝓢  ☍Rafet",
        `ma!yardım|${client.guilds.size} sunucu|${client.users.size} kullanıcı`
    ];
    setInterval(function() {
	var random = Math.floor(Math.random()*(Games.length-0+1)+0);
        client.user.setGame(Games[random], "https://www.twitch.tv/antiquary01");
        }, 2 * 2500);
};
