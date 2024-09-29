const fs = require('fs');
module.exports = {
  config: {
    name: "evariste",
    version: "1",
    author: "aesther",
    countDown: 5,
    role: 0,
    shortDescription: "Groove de Evariste 😜👍🏻",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "aesther") {
      return message.reply({
        body: "ur Time is 𝗨𝗣 my Time is 𝗡𝗢𝗪✨",
        attachment: fs.createReadStream("scripts/cmds/cache/téléchargement.mp3"),
      });
    }
  }
};
