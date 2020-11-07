const commando = require('discord.js-commando')
const _ = require('lodash')

 class DiceRollCommand extends commando.Command {

    constructor(bot) {
        super(bot, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a dice.'
        })
    }

    async run(message, args) {
        let roll = args.split(' ')
        let hasNumber = /^[0-9]$/

        if (roll[0] || roll[1]) {
            if (!hasNumber.test(roll[0]) || !hasNumber.test(roll[1])) {
                console.log('roll[1] -> '+ !hasNumber.test(roll[0])) // returns true
                console.log('roll[2] -> '+ !hasNumber.test(roll[1])) // returns true

                message.reply('[DEBUG] Syntax Error input must be a number')
                return
            }
        }
        if (roll.length >= 3) {
            message.reply('[DEBUG] Syntax Error cannot use more than 2 parameters')
            return
        }
        if (roll[0] > 1000000 || roll[1] > 1000000) {
            message.reply('Unfortunately for you, computers have a limited amount of memory, so unless you want me to run out, stop sending ludicrous numbers. Thanks.')
            return
        }
       if (message.content.match(/^!roll$/)) {
           message.reply('rolled ' + _.random(1, 6))
       }
       if (message.content.match(/^!roll [0-9]+\b/)) {
           message.reply('rolled ' + _.random(1, roll[0]))
       }
       if (message.content.match(/^!roll ([0-9]*) ([0-9]*)+\b/)) {
           message.reply('rolled ' + _.random(roll[0], roll[1]))
       }

    }

}

module.exports = DiceRollCommand
