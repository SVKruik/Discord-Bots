const profileModel = require("../../models/profileSchema");
const config = require("./../../Other/config.js");

module.exports = async (message, args, cmd, client, Discord, member, profileData) => {
  const tagfull = message.author.tag
  const tag = tagfull.substr(-4);
  let profile = await profileModel.create({
    avatar: message.author.avatar,
    bot: message.author.bot,
    tag: tag,
    uni: rndInt,

    scrapexotic: 0,
    scraplegendary: 0,
    scrapepic: 0,
    scraprare: 0,
    scrapuncommon: 0,
    scrapcommon: 0,

    music1: "https://www.youtube.com/",
    music2: "https://www.youtube.com/",
    music3: "https://www.youtube.com/",
    music4: "https://www.youtube.com/",
    music5: "https://www.youtube.com/",
    music6: "https://www.youtube.com/",

    level: 0,
    experience: 0,

    wallet: 0,
    bank: 0,

    boxesultra: 0,
    boxessuper: 0,
    boxesnormal: 0,

    shardsdiamond: 0,
    shardsplatinum: 0,
    shardsgold: 0,
    shardssilver: 0,
    shardsbronze: 0,
    shardsiron: 0,
  });
  profile.save();
};