const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Bot Bilgi')
.setTimestamp()
.addField('Kuruluş Yılı', '2020')
.addField('Bot Sahibi', '<@667302067588825088>')
.addField('Neden Biz?', 'Gelişmiş Özellikli Botumuz Var ')
.addField('Davet Linklerini Nasıl Görebilirim?', 'b!davet')
.addField('Hedefimiz Nedir?', '150 Sunucu Büyük Hedefim')
.setFooter('Vodeming - Bot - Bilgi Komutu', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};
exports.help = {
  name: 'bilgi',
  description: '.',
  usage: 'bilgi'
};