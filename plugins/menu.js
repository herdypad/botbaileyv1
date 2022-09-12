exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.reply(m.chat, `Hai ${m.pushName}  \nMenu Bot baru ini \n1. stiker \n2. stikergif \n\nkirim Foto Atau Video dengan Caption diatas yah \n\nMenu Lainya Nyusul Yah`, m)
   },
   error: false
}


//  bisa di Akses di \nhttps://play.google.com/store/apps/details?id=com.indobot.botwastikerapp