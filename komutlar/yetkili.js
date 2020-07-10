const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Yetkili Komutları:",`
v!ᴏᴛᴏᴛᴀɢ: sᴜɴᴜᴄᴜʏᴀ ɢɪʀᴇɴ ᴋɪsɪʟᴇʀ ɪᴄɪɴ ᴏᴛᴏ ᴛᴀɢ ᴠᴇʀɪʀ. 
v!ᴄɪᴋɪs-ᴍᴇsᴀᴊ-ᴀʏᴀʀʟᴀ: ᴄɪᴋɪs ᴍᴇsᴀᴊɪɴɪ ᴅᴇɢɪsᴛɪʀᴍᴇɴɪᴢɪ sᴀɢʟᴀʀ. 
v!sᴀ-ᴀs: sᴀ-ᴀs ᴀʏᴀʀʟᴀʀ. 
v!sᴀʏᴀᴄ: sᴀʏᴀᴄ <sᴀʏɪ> <#ᴋᴀɴᴀʟ> 
v!ᴏᴛᴏʀᴏʟ: sᴜɴᴜᴄᴜʏᴀ ɢɪʀᴇɴʟᴇʀᴇ ᴠᴇʀɪʟᴇᴄᴇᴋ ᴏʟᴀɴ ᴏᴛᴏʀᴏʟᴜ ᴀʏᴀʀʟᴀʀ. 
v!ᴋᴀᴘᴀᴛᴏᴛᴏʀᴏʟ: ᴏᴛᴏʀᴏʟ ᴋᴀᴘᴀᴛᴍᴀ ɪsᴇ ʏᴀʀᴀʀ. 
v!ᴏʏʟᴀᴍᴀ-ᴋᴀɴᴀʟ: ᴏʏʟᴀᴍᴀ ᴋᴀɴᴀʟɪɴɪ sᴇᴄᴍᴇɴɪᴢᴇ ʏᴀʀᴀʀ. 
v!ᴅᴜʏᴜʀᴜ-ᴋᴀɴᴀʟ-ᴀʏᴀʀʟᴀ: ᴅᴜʏᴜʀᴜ ᴋᴀɴᴀʟɪɴɪ ʙᴇʟɪʀʟᴇʀ.
v!prefix-ayarla:Sunucunuza Özel Prefix ayarlarsınız.(Yeni)
v!ɢɪʀɪsᴍᴇsᴀᴊ: ɢɪʀɪs ᴍᴇsᴀᴊɪɴɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
v!ᴄɪᴋɪsᴍᴇsᴀᴊ: ᴄɪᴋɪs ᴍᴇsᴀᴊɪɴɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
v!ᴏᴢᴇʟ-ɢᴏʀᴜsᴜʀᴜᴢ-ᴀʏᴀʀʟᴀ: sᴜɴᴜᴄᴜᴅᴀɴ ᴀʏʀɪʟᴀɴ ᴋɪsɪʏᴇ ᴏᴢᴇʟᴅᴇɴ ɢᴏɴᴅᴇʀɪʟᴇᴄᴇᴋ ᴍᴇsᴀᴊɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
v!ᴏᴢᴇʟ-ʜᴏsɢᴇʟᴅɪɴ-ᴀʏᴀʀʟᴀ: sᴜɴᴜᴄᴜʏᴀ ɢɪʀᴇɴ ᴋɪsɪʏᴇ ᴏᴢᴇʟᴅᴇɴ ɢᴏɴᴅᴇʀɪʟᴇᴄᴇᴋ ᴍᴇsᴀᴊɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
v!ᴍᴏᴅ-ʟᴏɢ-ᴀʏᴀʀʟᴀ: ᴍᴏᴅᴇʀᴀsʏᴏɴ ᴋᴀʏɪᴛʟᴀʀɪ ᴋᴀɴᴀʟɪɴɪ ᴀʏᴀʀʟᴀʀ. 
v!giriş-çıkış-ayarla: ʀᴇsɪᴍʟɪ ʜɢ ᴋᴀɴᴀʟɪɴɪ ʙᴇʟɪʀʟᴇʀ. 
v!ʙᴀɴ: ɪsᴛᴇᴅɪɢɪɴɪᴢ ᴋɪsɪʏɪ ʙᴀɴʟᴀʀ. 
v!ᴅᴜʏᴜʀᴜ: ᴅᴜʏᴜʀᴜ sɪsᴛᴇᴍɪ. 
v!ʟɪɴᴋ-ᴇɴɢᴇʟʟᴇ: ʟɪɴᴋ ᴇɴɢᴇʟʟᴇᴍᴇ sɪsᴛᴇᴍɪɴɪ ᴀᴄɪᴘ ᴋᴀᴘᴀᴛᴍᴀɴɪᴢɪ sᴀɢʟᴀʀ. 
v!eh-engel:Sunucudaki everyone ve here yazılarını engellersiniz.(Yeni)
v!sᴜɴᴜᴄᴜ-ᴋᴜʀ: ʙᴜʟᴜɴᴜʟᴀɴ sᴜɴᴜᴄᴜ ɪᴄɪɴ ɢᴇʀᴇᴋʟɪ ᴋᴀɴᴀʟʟᴀʀɪ ᴏʟᴜsᴛᴜʀᴜʀ. 
v!ʟᴏɢ-ᴀʏᴀʀʟᴀ: ʟᴏɢ ᴋᴀɴᴀʟɪ ᴀʏᴀʀʟᴀsɪɴɪᴢ. 
v!ʀᴇᴋʟᴀᴍ-ᴛᴀʀᴀᴍᴀsɪ: ᴋᴜʟʟᴀɴɪᴄɪʟᴀʀɪɴ ᴏʏɴᴜʏᴏʀ ᴍᴇsᴀᴊɪɴᴅᴀᴋɪ ᴠᴇ ᴋᴜʟʟᴀɴɪᴄɪ ᴀᴅʟᴀʀɪɴᴅᴀᴋɪ ʀᴇᴋʟᴀᴍʟᴀʀɪ ᴛᴀʀᴀʀ. 
v!küfür-engel: Küfür Engeli Açarsınız. (Yeni!)
v!güvenlik #kanal: Güvenlik Kanalını Belirlersiniz. (Yeni!)
v!uyar:Bir üyeyi uyarırsınız.(Yeni!)
v!isimdeğiştir:Etiketlediğiniz Kullanıcının ismini değiştirir.(Yeni)
`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili','yetkilis'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yetkili'
};
