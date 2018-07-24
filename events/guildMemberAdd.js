const ayarlar = require('../ayarlar.json');
const client = new Discord.Client();

var prefix = ayarlar.prefix;

client.on('message', msg => {
});

module.exports = member => {
    let username = member.user.username;
    msg.reply('Hoş geldin **' + username + '**! Buraya arkadaşlarını davet edebilir ve onlarla oyun oynayabilir, yeni arkadaşlar edinip onlarla oyunlar oynayıp sohbet edebilirsin!');
};
