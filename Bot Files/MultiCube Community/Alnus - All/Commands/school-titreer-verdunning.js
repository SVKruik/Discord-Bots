module.exports = {
  name: "titratieverdunning",
  aliases: ["titverdun"],
  cooldown: process.env.ASMID,
  description: "Calculate some science math.",
  permissions: ["SEND_MESSAGES"],
  execute(message, args, cmd, client, Discord) {
    const pipet = 10;
    const verdunningsfactor = 10;
    const titreerml = 11.11;
    const molbekende = 0.1004;
    const molverhouding = 1;

    const mmolbekende = titreerml * molbekende;
    const mmolonbekende = mmolbekende / molverhouding;
    const mmolonbekendenapipet = mmolonbekende / pipet;
    const molariteitonbekende = mmolonbekendenapipet * verdunningsfactor;

    //Input
    var titreermlafgerond =
      Math.round((titreerml + Number.EPSILON) * 1000) / 1000;
    var molbekendeafgerond =
      Math.round((molbekende + Number.EPSILON) * 1000) / 1000;

    var mmolbekendeafgerond =
      Math.round((mmolbekende + Number.EPSILON) * 1000) / 1000;
    var molverhoudingafgerond =
      Math.round((molverhouding + Number.EPSILON) * 1000) / 1000;

    var mmolonbekendeafgerond =
      Math.round((mmolonbekende + Number.EPSILON) * 1000) / 1000;
    var pipetafgerond = Math.round((pipet + Number.EPSILON) * 1000) / 1000;

    var mmolonbekendenapipetafgerond =
      Math.round((mmolonbekendenapipet + Number.EPSILON) * 1000) / 1000;
    var verdunningsfactorafgerond =
      Math.round((verdunningsfactor + Number.EPSILON) * 1000) / 1000;

    //Uitkomsten
    var mmolbekendeafgerond =
      Math.round((mmolbekende + Number.EPSILON) * 1000) / 1000;
    var mmolonbekendeafgerond =
      Math.round((mmolonbekende + Number.EPSILON) * 1000) / 1000;
    var mmolonbekendenapipetafgerond =
      Math.round((mmolonbekendenapipet + Number.EPSILON) * 1000) / 1000;
    var molariteitonbekendeafgerond =
      Math.round((molariteitonbekende + Number.EPSILON) * 1000) / 1000;

    const newEmbed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setTitle(process.env.MBDTITLETITREERVERDUN)
      .setImage(process.env.MBDIMG)
      .setDescription(process.env.MBDDESCTITREERVERDUN)
      .addFields(
        {
          name: `1. Reactievergelijking opstellen:`,
          value: `C2H2O4(aq) + 2OH(aq) --> 2H2O(l) + C2O4`,
        },
        {
          name: `2. Millimol van de gegeven berekenen: hoeveelheid dat je titreert, delen door M bekende. Dit geeft de MMol van je oplossing.`,
          value: `${titreermlafgerond} ML ⋅ ${molbekendeafgerond} M = ${mmolbekendeafgerond} ML.`,
        },
        {
          name: `3. Molverhouding: als de molverhouding 1:1 is, dan is bekende mmol = onbekende. Anders eerst delen door molverhouding.`,
          value: `${mmolbekendeafgerond} M mol / ${molverhoudingafgerond} = ${mmolonbekendeafgerond}.`,
        },
        {
          name: `4. Verdunning: M mol van je onbekende delen door hoeveelheid dat je in je pipet neemt.`,
          value: `${mmolonbekendeafgerond} ML / ${pipetafgerond}.00 ML** = ${mmolonbekendenapipetafgerond} ML.`,
        },
        {
          name: `5. Verdunningsfactor: antwoord bij stap 3 delen door verdunningsfactor geeft de molariteit.`,
          value: `${mmolonbekendenapipetafgerond} ML ⋅ ${verdunningsfactorafgerond} = ${molariteitonbekendeafgerond} M.`,
        }
      )
      .setFooter(process.env.MBDFTR);

    message.channel.send(newEmbed);
  },
};
