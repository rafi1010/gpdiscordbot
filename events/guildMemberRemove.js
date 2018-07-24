module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.message(`${member.user.username} aramızdan ayrıldı :frowning:`);
};
