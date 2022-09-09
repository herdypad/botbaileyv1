exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.reply(m.chat, `Hai ${m.pushName}  \nMenu Bot Baru ini\n #sticker\n#stickergif`, m)
   },
   error: false
}

//hanya bisa di Akses di \nhttps://play.google.com/store/apps/details?id=com.indobot.botwastikerapp
