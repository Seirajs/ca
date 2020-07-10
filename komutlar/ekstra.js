const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Ekstra  Komutları:",`
b!davet-sıralaması: Sunucunuza en çok kullanıcı getirenleri sıralar.
b!bunny: Yazınızı bunny yazısına dönüştürür.
b!üyedurum: Üye Durumlarını ve sunucudaki üye sayısını gösterir
b!türk: Türk bayrağı gönderir.


`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ekstra',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'ekstra'
};
