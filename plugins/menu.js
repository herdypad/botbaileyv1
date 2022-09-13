exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {

      client.reply(m.chat, `Hai ${m.pushName}  \nBot ini hanya bisa di akses lewat Aplikasi \n\n ketik \n #cekaplikasi`, m)

   },
   error: false
}


//  bisa di Akses di \nhttps://play.google.com/store/apps/details?id=com.indobot.botwastikerapp

