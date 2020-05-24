const Discord = require('discord.js')
const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')

dayjs.extend(customParseFormat)

process.env.TZ = 'Europe/Stockholm'

const client = new Discord.Client()
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
 
client.on('message', msg => {
  if (!msg.content.startsWith('!') || msg.author.bot) {return}
  if (msg.content.includes('!lotus')) {
    const command = msg.content.toLowerCase().replace('!lotus', '').split(' ')[1]
    const regex = new RegExp('^([0-1]?[0-9]|2[0-3])[:.]?[0-5][0-9]$')

    if (typeof command === 'undefined') {
      const nowobj = dayjs()
      const now = dayjs(nowobj).format('HH:mm')
      const nextobj = dayjs(nowobj).add(45, 'minute')
      const next = dayjs(nextobj).format('HH:mm')
      const timerobj = dayjs(nextobj).add(30, 'minute')
      const timer = dayjs(timerobj).format('HH:mm')
    
      msg.channel.send(`TAKEN: ${now}\nNEXT: ${next}\nNext timer end: ${timer}`)
    }

    if (regex.test(command)) {
      var input = command
      var input = input.replace(/[:.]/g, ":")
      if (input.charAt(0) != "0") {
        var input = "0" + input
      }
      if (input.length === 4) {
        var input = input.slice(0,2) + ":" + input.slice(2)
      }
      
      const nowobj = dayjs(input, 'HH:mm')
      const now = dayjs(nowobj).format('HH:mm')
      const nextobj = dayjs(nowobj).add(45, 'minute')
      const next = dayjs(nextobj).format('HH:mm')
      const timerobj = dayjs(nextobj).add(30, 'minute')
      const timer = dayjs(timerobj).format('HH:mm')
      
      msg.channel.send(`TAKEN: ${now}\nNEXT: ${next}\nNext timer end: ${timer}`)
    } else if (typeof command === 'string') {
      msg.react('❎')
    }
  }
})

client.login(process.env.token)