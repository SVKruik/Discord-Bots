const config = require("./../Other/config.js");

module.exports = {
  name: "cirkel",
  aliases: config.aliases.aliasescirkelvergelijking,
  cooldown: config.cooldown.cooldowncirkelvergelijking,
  permissions: config.permissions.permissioncirkelvergelijking,
  description: "Calculate a circle equation.",
  execute(message, args, cmd, client, Discord) {
    let a = args[0];
    let b = args[1];
    let c = args[2];

    const ahelft = a / 2;
    const bhelft = b / 2;

    const ahelftkwa = ahelft * ahelft;
    const bhelftkwa = bhelft * bhelft;

    const abc = ahelftkwa + bhelftkwa + c;

    const wabc = Math.sqrt(abc);

    //Input
    var wabcafgerond = Math.round((wabc + Number.EPSILON) * 1) / 1;

    const diameter = wabcafgerond * 2;

    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(process.env.MBDTITLECIRCLE)
      .setImage(config.embed.embedimage)
      .setDescription(process.env.MBDDESCCIRCLE)
      .addFields(
        {
          name: `1. Begin:`,
          value: `X² + Y² - ${a}X - ${b}Y - ${c} = 0`,
        },
        {
          name: `2. Ordenen gegevens:`,
          value: `X² - ${a}X + Y² - ${b}Y - ${c} = 0`,
        },
        {
          name: `3. Haakjes:`,
          value: `(X - ${ahelft})² - ${ahelftkwa} + (Y - ${bhelft})² - ${bhelftkwa} - ${c} = 0`,
        },
        {
          name: `4. Optellen overigen:`,
          value: `(X - ${ahelft})² + (Y - ${bhelft})² -${abc}= 0`,
        },
        {
          name: `5. Naar andere kant:`,
          value: `(X - ${ahelft})² + (Y - ${bhelft})² = ${abc}`,
        },
        {
          name: `6. Middelpunt (M) bepalen:`,
          value: `M(${ahelft}, ${bhelft})`,
        },
        {
          name: `7. Straal bepalen:`,
          value: `√${abc} geeft een straal van ${wabcafgerond}. De diameter is dus ${diameter}.`,
        }
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};
