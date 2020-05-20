const Discord = require('discord.js')
const dayjs = require('dayjs')

process.env.TZ = 'Europe/Stockholm'

const client = new Discord.Client()
const timestamp = false
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
 
const addTime = (date, minutes) => {
  return new Date(date.getTime() + minutes * 60000)
}
 
client.on('message', msg => {
	console.log(msg)
	console.log(msg.content)
  if (msg.content.includes('!lotus')) {
    //const command = msg.content.toLowerCase().replace('!lotus', '').split(' ')[0]
    const args = msg.content.slice(1).split(/ +/);
	  console.log(args)
    const command = args.shift().toLowerCase();
	  console.log(command)
    const regex = new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$")
    
    if (!command.length) {
      const now = dayjs().format('HH:mm')
      const next = dayjs().add(45, 'minute').format('HH:mm')
        
      const output = `TAKEN: ${now}\nNEXT: ${next}`
    
      msg.channel.send(output)
    } else {
      if (regex.test(command)) {
        const timestamp = true
      }
    }
    if (timestamp) {
      const output = `timestamp: ${command}`
      msg.channel.send(output)
    }
  }
})

 
client.login(process.env.token)
