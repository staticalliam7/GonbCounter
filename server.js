const app = require('express')();
var fs = require("fs");

var gonbcount = null;
fs.readFile("./gonbPersistent.txt", "utf-8", (err, data) => {
        if (err) { console.log(err) }
        gonbcount = parseInt(data);
})
app.get('/', (req, res) => res.send('Gonbcount:' + gonbcount));

module.exports = () => {
  app.listen(3000);
}