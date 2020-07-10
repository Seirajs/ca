const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Eğlence  Komutları:",`
v!aşkölç: Aşkınızı Ölçersiniz.
v!kafasalla: Kafa sallarsınız.
v!kedi: Rastgele kedi gif atar.
v!doğumgünü: Arkadasini Bilir.
v!yazıtura: Yazı-Tura atar.
v!öp: iştediniz kişiyi öpersiniz.
v!mcskin: Belirtilen oyuncunun kostümünü gösterir.
v!tekme-at: İstediğiniz Kişiye tekme Atarsınız.
v!nahçek: İstediğiniz Kişiye Çekiç Atarsınız.
v!düello: İstediğiniz bir kişi ile düello atarsınız.
v!söz: Geceye Havalı bir söz bırakırsınız. (Yeni!)

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'eğlence'
};
