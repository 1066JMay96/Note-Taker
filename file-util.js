const fs = require('fs');

module.exports.readFile = readFile = () => {
return fs.readFileSync('db.json','utf-8')


}
module.exports.writeFile = note => {
  let fileContent = readFile();
  let notes = JSON.parse(fileContent);
  notes.push(note);
  notes = JSON.stringify(notes);
  fs.writeFileSync("db.json", notes)
}