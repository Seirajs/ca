const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('711966631735328859') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription(` | ** ${ayarlar.prefix}yetkili** Yetkili Komutları.\n  | ** ${ayarlar.prefix}kullanıcı** Kullanıcıya Komutları.\n  | ** ${ayarlar.prefix}eğlence** Eğlence Komutları.\n  | ** ${ayarlar.prefix}oyun**  Oyun Komutları Gösterir.\n` + `| ** ${ayarlar.prefix}seviyeyardım**  Seviyeyardım Komutları Gösterir.\n`  + `| ** ${ayarlar.prefix}muzik**  muzik Komutlarını Gösterir.\n`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=710138066085347389&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/rHefj3k) **|** [Web Sitesi](https://www.shadownw.mc.tc/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage("https://cdn.discordapp.com/avatars/726187273330098246/b3bff969ae9496f25e5a41c2d720212a.png?size=2048")  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};