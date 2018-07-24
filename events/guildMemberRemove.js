module.exports = member => {
  let guild = member.guild;
  send.message('niye gittin?');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
