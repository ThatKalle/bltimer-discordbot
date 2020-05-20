const Discord = require('discord.js')
const dayjs = require('dayjs')

process.env.TZ = 'Europe/Stockholm'

const client = new Discord.Client()
const timestamp = false
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
 
client.on('message', msg => {
  console.log(`msg.content:`)
  console.log(msg.content)
  if (msg.content.includes('!lotus')) {
    const command = msg.content.toLowerCase().replace('!lotus', '').split(' ')[0]
    console.log(`command:`)
    console.log(command)
    const regex = new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')
 
    if (regex.test(command)) {
      const timestamp = true
    }

    if (!command.length) {
      const now = dayjs().format('HH:mm')
      const next = dayjs().add(45, 'minute').format('HH:mm')
    
      msg.channel.send(`TAKEN: ${now}\nNEXT: ${next}`)
    }

    if (timestamp = true) {
      msg.channel.send(`Timestamp: ${command}`)
    }
  }
})

client.login(process.env.token)
