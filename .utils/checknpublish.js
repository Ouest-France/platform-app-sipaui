var exec = require('child_process').exec
var fs = require("fs");

var content = fs.readFileSync("./package.json");
if(!content || !JSON.parse(content) || !JSON.parse(content).version) {
    console.log("error reading version from package");
}
var child = exec('npm show sipa-ui version',
  function(err, stdout, stderr) {
    if (err) throw err;
    else {
        var distant = stdout.trim();
        var local = JSON.parse(content).version;
        console.log('check version', distant, local);
        if(distant != local) {
            exec('npm publish',
              function(err, stdout, stderr) {
                if (err) throw err;
                else {
                    console.log('Version ', local, ' published !');
                }
            });
        } else {
            console.log('Nothing new to publish');
        }
    }
});
