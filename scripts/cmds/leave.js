const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");

module.exports = {
    config: {
        name: "leave",
        aliases: ["out","l"],
        version: "1.0",
        author: "Aesther",
        countDown: 0,
        role: 1,
        longDescription: {
            en: "Bot will leave the group after sending an image 👋🚶‍♀️.",
        },
        category: "admin",
        guide: {
            en: ".out [tid or blank]"
        }
    },

    onStart: async function ({ api, event, args }) {
        const imageUrl = "https://i.imgur.com/WBXh7yv.gif";
        let id;

        if (!args.join(" ")) {
            id = event.threadID;
        } else {
            id = parseInt(args.join(" "));
        }

        // Fetch the image
        try {
            const response = await axios({
                method: 'get',
                url: imageUrl,
                responseType: 'arraybuffer'
            });

            // Create a buffer from the image data
            const buffer = Buffer.from(response.data, 'binary');

            // Save the image to a temporary file (optional)
            const tempFilePath = './temp_image.jpeg';
            await fs.writeFile(tempFilePath, buffer);

            // Send the image and then remove the bot from the group
            return api.sendMessage({
                body: '𝗧𝗁𝖾 𝖢𝖺𝗅𝗅 𝗈𝖿 𝖣𝗎𝗍𝗒 𝖨 𝗚𝗧𝗚 ‼️ \n\n🏃‍♀️ 𝗕𝗘𝗬 𝗕𝗘𝗬 🟢🔴⚪',
                attachment: fs.createReadStream(tempFilePath)
            }, id, () => {
                api.removeUserFromGroup(api.getCurrentUserID(), id);
                // Cleanup: remove the temporary file after sending
                fs.remove(tempFilePath);
            });
        } catch (error) {
            console.error("Error fetching or sending image:", error);
            return api.sendMessage('Could not fetch the image.', id);
        }
    }
};
