const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Doğru Kullanım: b!tavsiye Bence bunu bunu eklerseniz daha iyi olur'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Tavsiyeniz başarıyla sahibime bildirildi! İyi GÜNLER')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının tavsiyesi:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Tavsiye", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('715077544222654464').send(embed2); // Kanal ID 

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'tavsiye',
  description: 'Bot için sahibime tavsiye bildirirsiniz',
  usage: 'tavsiye <tavsiyeniz>'
};