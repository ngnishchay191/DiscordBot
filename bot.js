const Discord = require('discord.js');
require("dotenv").config()

// const TOKEN = "discord bot token used in env now";

// discord api calls discord servers guilds for some reason
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "hi" || message.content == "hello" || message.content == "hey") {
        message.reply("Hello World");
    }
})

client.login(process.env.TOKEN_BOT)