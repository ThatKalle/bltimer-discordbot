process.env.TZ = 'Europe/Stockholm' 
const Discord = require('discord.js')
const dayjs = require('dayjs')
const client = new Discord.Client()
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
 
const addTime = (date, minutes) => {
  return new Date(date.getTime() + minutes * 60000)
}
 
client.on('message', msg => {
  if (msg.content === 'blacklotus') {
    const now = dayjs().format('HH:mm')
    const next = dayjs().add(45, 'minute').format('HH:mm')

    const output = `TAKEN: ${now}\nNEXT: ${next}`
   
    msg.channel.send(output)
  }
})


client.on('message', msg => {
  if (msg.content.includes('!lotus')) {
    const command = msg.content.toLowerCase().replace('!lotus', '').split(' ')[0]

    msg.channel.send(command)
  }
})

 
client.login(process.env.token)
