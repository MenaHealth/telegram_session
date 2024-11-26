require('dotenv').config();

const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input"); // npm install input

const apiId = process.env.TELEGRAM_API_ID;
const apiHash = process.env.TELEGRAM_API_HASH;

if (!apiId || !apiHash) {
    console.error("Error: TELEGRAM_API_ID or TELEGRAM_API_HASH is missing in the .env file.");
    process.exit(1);
}

const client = new TelegramClient(new StringSession(""), apiId, apiHash, {
    connectionRetries: 5,
});

(async () => {
    console.log("Starting Telegram authentication...");
    await client.start({
        phoneNumber: async () => await input.text("Enter your phone number: "),
        password: async () => await input.text("Enter your password (if 2FA is enabled): "),
        phoneCode: async () => await input.text("Enter the code sent to your Telegram: "),
        onError: (err) => console.error(err),
    });

    console.log("Authentication successful!");
    console.log("Your StringSession:", client.session.save()); // Save this session string
    process.exit(0);
})();