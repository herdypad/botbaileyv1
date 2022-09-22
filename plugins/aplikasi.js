exports.run = {
   usage: ['cekaplikasi'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.reply(m.chat, `Hai ${m.pushName}  \nbisa di Akses di \nhttps://play.google.com/store/apps/details?id=com.indobot.botwastikerapp`, m)
   },
   error: false
}


//  bisa di Akses di \nhttps://play.google.com/store/apps/details?id=com.indobot.botwastikerapp