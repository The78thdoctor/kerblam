const Discord = require('discord.js');
module.exports.run = (bot, message) => {
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;
    let kerlogs = message.guild.channels.find(c => c.name === "kerlogs");
    if (!kerlogs) return;
    let image = message.attachments.map(g => g.proxyURL)
    if (message.content === 0) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTimestamp()
        .setAuthor(`Message Deleted By ${message.author.tag}`, `${message.author.displayAvatarURL}`)
        .setFooter(`${bot.user.tag}`, `${bot.user.displayAvatarURL}`)
        .setDescription(`_ _►Content: **${message.content ? message.content : image}** \n ►Channel: <#${message.channel.id}> \n ►Message ID: ${message.id}`)
    kerlogs.send(botembed)
}
