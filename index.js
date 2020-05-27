const Discord = require('discord.js')
const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')

dayjs.extend(customParseFormat)

process.env.TZ = 'Europe/Stockholm'

const client = new Discord.Client()

function parseTimeFormat (input) {
  var result = input
  var result = result.replace(/[:.]/g, ":")

  if (result.length === 3) {
    var result = "0" + result
  }

  if (result.length === 4) {
    var result = result.slice(0,2) + ":" + result.slice(2)
  }

  return result
}
 
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
    
      msg.channel.send(`TAKEN: ${now}\n**NEXT: ${next}** end: ${timer}`)
    }

    if (regex.test(command)) {
      var input = parseTimeFormat(command)
      
      const nowobj = dayjs(input, 'HH:mm')
      const now = dayjs(nowobj).format('HH:mm')
      const nextobj = dayjs(nowobj).add(45, 'minute')
      const next = dayjs(nextobj).format('HH:mm')
      const timerobj = dayjs(nextobj).add(30, 'minute')
      const timer = dayjs(timerobj).format('HH:mm')
      
      msg.channel.send(`TAKEN: ${now}\n**NEXT: ${next}** end: ${timer}`)
    } else if (typeof command === 'string') {
      msg.react('❎')
    }
  }
})

client.login(process.env.token)