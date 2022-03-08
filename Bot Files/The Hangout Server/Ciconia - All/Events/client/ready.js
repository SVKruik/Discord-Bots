const config = require("./../../Other/config.js");

module.exports = () => {
    const fs = require("fs");
    const commands = fs.readdirSync("./Commands").length;

    var today = new Date();
    var ss = String(today.getSeconds()).padStart(2, '0');
    var m = String(today.getMinutes()).padStart(2, '0');
    var hh = String(today.getHours()).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = ss + " Seconds / " + m + " Minutes / " + hh + " Hours / " + dd + " Days / " + mm + " Months / " + yyyy;

    console.log(`Succesfully loaded ${commands} files.`)
    console.log(`I started this session on ${today}.`)
    console.log(process.env.ONLINE);
}
