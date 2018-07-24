module.exports = member => {
  client.on('message', msg => {
  }
});
  let guild = member.guild;
  guild.defaultChannel.message(`${member.user.username} aramızdan ayrıldı :frowning:`);
};
