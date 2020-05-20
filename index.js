process.env.TZ = 'Europe/Stockholm' 
const Discord = require('discord.js')
const client = new Discord.Client()
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
 
const dateAdd = (date, interval, units) => {
  if (!(date instanceof Date)) return undefined
 
  let ret = new Date(date)
 
  const checkRollover = () => {
    if (ret.getDate() !== date.getDate()) {
      ret.setDate(0)
    }
  }
 
  switch (String(interval).toLowerCase()) {
    case 'minute':
        ret.setTime(ret.getTime() + units * 60000)
        break;
    case 'second':
        ret.setTime(ret.getTime() + units * 1000)
        break;
    default:
        ret = undefined
        break;
  }
 
  return ret
}
 
client.on('message', msg => {
  if (msg.content === 'blacklotus') {
    let taken = new Date()
    const next = dateAdd(taken, 'minute', 45)
    const takenHours = String(taken.getHours()).padStart(2, '0')
    const takenMinutes = String(taken.getMinutes()).padStart(2, '0')
    const nextHours = String(next.getHours()).padStart(2, '0')
    const nextMinutes = String(next.getMinutes()).padStart(2, '0')
   
    const output = `TAKEN: ${takenHours}:${takenMinutes}\nNEXT: ${nextHours}:${nextMinutes}`
   
    msg.channel.send(output)
  }
})
 
client.login(process.env.token)
