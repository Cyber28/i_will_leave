const auth = require('./auth.json')
const Discord = require('discord.js')
const client = new Discord.Client()

function leave(guild){
    guild.leave().then(g => {
        console.log(`Left guild: ${g}`)
    })
}

client.on('ready', () => {
    console.log(`Hello world!\nLogged in as: ${client.user.tag}\nInvite me at: https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot`)
})

client.on('guildCreate', guild => {
    leave(guild)
})

client.on('message', message => {
    if(message.guild){
        leave(message.guild)
    }
})

client.login(auth.token)