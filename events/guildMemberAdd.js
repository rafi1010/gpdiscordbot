module.exports = member => {
    let username = member.user.username;
    send.message('Hoş geldin **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};
