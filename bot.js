const Discord = require('discord.js');
require("dotenv").config()

// const TOKEN = "discord bot token used in env now";

const generateImage = require("./generateImage");

// discord api calls discord servers guilds for some reason
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: "n.",
    owners: ["235729873841160204"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)


client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot;

// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}`)
// })

client.on("messageCreate", (message) => {
    if(message.content == "hi" || message.content == "hello" || message.content == "hey") {
        // message.reply("Hello <@${message.author.id}>");
        let authorId = message.author.id;

        let mentionString = '<@!'+authorId+'>';
        message.channel.send(mentionString+' Hello there');
    }
})

const welcomeChannelID = "983427622874808371";
client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member);
    member.guild.channels.cache.get(welcomeChannelID).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    });
})

client.login(process.env.TOKEN_BOT)