process.env.TZ = 'Europe/Stockholm'
const prefix = '!'
const Discord = require('discord.js')
const dayjs = require('dayjs')
const client = new Discord.Client()
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
 
const addTime = (date, minutes) => {
  return new Date(date.getTime() + minutes * 60000)
}
 
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return
  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()
  if (message.content === '${prefix}lotus') {
    if (!args.length) {
      const now = dayjs().format('HH:mm')
      const next = dayjs().add(45, 'minute').format('HH:mm')
      
      const output = `TAKEN: ${now}\nNEXT: ${next}`
      
    } else if (args[0]) {
      const regex = new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$")
      if (regex.test(args[0])) {
        const output = `TEST: args[0]`
      }
    }
  message.channel.send(output)
  }
})
 
client.login(process.env.token)
