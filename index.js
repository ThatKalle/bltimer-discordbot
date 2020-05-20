const Discord = require('discord.js')
const dayjs = require('dayjs')

process.env.TZ = 'Europe/Stockholm'

const client = new Discord.Client()
const timestamp = false
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === `!lotus`) {
    const now = dayjs().format('HH:mm')
    const then = dayjs().add(45, 'minute').format('HH:mm')

    const output = `TAKEN: ${now}\nNEXT: ${then}`

    msg.channel.send(output)
  }
})

 
client.login(process.env.token)
