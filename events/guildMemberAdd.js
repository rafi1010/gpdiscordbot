module.exports = member => {
    let username = member.user.username;
    message.member('Hoş geldin **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};
