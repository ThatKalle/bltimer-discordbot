const Discord = require('discord.js')
const dayjs = require('dayjs')

process.env.TZ = 'Europe/Stockholm'

const client = new Discord.Client()
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
 
const addTime = (date, minutes) => {
  return new Date(date.getTime() + minutes * 60000)
}
 
client.on('message', msg => {
  if (msg.content.includes('!lotus')) {
    const command = msg.content.toLowerCase().replace('!lotus', '').split(' ')[0]
    const regex = new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$")
    if (regex.test(command)) {
      const timestamp = true
    }
    if (!command.length) {
      const now = dayjs().format('HH:mm')
      const next = dayjs().add(45, 'minute').format('HH:mm')
        
      const output = `TAKEN: ${now}\nNEXT: ${next}`
    
      message.channel.send(output)
    }
    if (timestamp) {
      const output = `timestamp: ${command}`
      message.channel.send(output)
    }
  }
})

 
client.login(process.env.token)
