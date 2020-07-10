const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
    const embed = new Discord.RichEmbed()
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Kullanıcı Komutları:",`
v!davet: Botun Davet Linkini Gösterir.  
v!avatar: Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.
v!steam: steamstore Olan her Sey gösterir = örnek: m!steamstore Csgo.
v!sunucubilgi: Sunucunun bilgilerini gönderir.
v!ping: bot pingini gösterir.
v!istatistik: Botun istatistik gösterir.
v!bilgi: Bot Bilgi Gösterir.
v!havadurumu: hava durumunu gösterir.
v!top10: Botun En İyi Sunucularını Gösterir (Yeni!)
v!tavsiye:Bot hakkındaki görüşlerinizi Sahibime bildirir.(Yeni!)
v!karekök:Bir sayının karekökünü Almanızı sağlar(Yeni!)

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'kullanıcı'
};
