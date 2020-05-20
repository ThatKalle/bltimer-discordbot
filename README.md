     _     _ _   _                              _ _                       _ _           _   
    | |__ | | |_(_)_ __ ___   ___ _ __       __| (_)___  ___ ___  _ __ __| | |__   ___ | |_ 
    | '_ \| | __| | '_ ` _ \ / _ \ '__|____ / _` | / __|/ __/ _ \| '__/ _` | '_ \ / _ \| __|
    | |_) | | |_| | | | | | |  __/ | |_____| (_| | \__ \ (_| (_) | | | (_| | |_) | (_) | |_ 
    |_.__/|_|\__|_|_| |_| |_|\___|_|        \__,_|_|___/\___\___/|_|  \__,_|_.__/ \___/ \__|
                                                                                            
# bltimer-discordbot

Quick and dirty [Black Lotus](https://classic.wowhead.com/item=13468/black-lotus) timer bot for [Discord](https://discord.com).

![preview](https://github.com/ThatKalle/bltimer-discordbot/blob/master/preview/preview.png?raw=true)

## Usage

```
// Get lotus timer from Now picked time
!lotus

// Get lotus timer from [HH:mm] picked time
!lotus [HH:mm]
```

## Getting Started

You'll need to build an application using the [Discord Developer Portal](https://discord.com/developers)<br>
Aswell as spawn a bot.

### Installing

Built to be run on [Heroku](https://www.heroku.com/).

Buildpack: Nodejs<br>
Config Vars: token <Discord Bot Token>
  
Discord permissions needed: [3072](https://discordapi.com/permissions.html#3072)

## Built With

* [Discord.js](https://discord.js.org/#/)
* [day.js](https://day.js.org/)
* [Heroku](https://www.heroku.com/)
