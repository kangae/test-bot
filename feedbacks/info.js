const { MessageEmbed } = require('discord.js')
const { identity } = require('../identity')

exports.info = new MessageEmbed ()
  .setColor('#48B5DF')
  .setTitle('Bot Info')
  .setThumbnail(identity.thumbnail)
  .addFields(
    {
     name: 'Version:',
     value: `v${identity.package.version}`,
     inline: true
    },
    {
      name: 'License:',
      value: identity.package.license,
      inline: true
    },
    {
      name: 'Registered:',
      value: 'Aug 16, 2021',
      inline: true
    },
    {
      name: 'Project Leader:',
      value: 'draken#7035'
    },
    {
      name: 'Developer:',
      value: 'KucingKode#9594'
    },
    {
      name: 'Contributor:',
      value: 'Bcuzwhynot#4663'
    }
  )