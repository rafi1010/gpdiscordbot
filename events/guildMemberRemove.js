module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.send(`${member.user.username} aramızdan ayrıldı :frowning:`);
};
