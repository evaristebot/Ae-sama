const fs = require('fs');
module.exports = {
  config: {
    name: "😮",
    version: "1",
    author: "aesther",
    aliases:[], 
    countDown: 5,
    role: 0,
    shortDescription: "mp3 illuminations😮",
    longDescription: "no prefix",
    category: "VOCAL",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "wooo") {
      return message.reply({
        body: "😮😲😮",
        attachment: fs.createReadStream("scripts/cmds/cache/illuminati.mp3"),
      });
    }
  }
};
