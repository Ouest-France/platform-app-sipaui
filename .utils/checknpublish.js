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
        // if(distant != local) {
        if(true) {
            [
                'npm publish',
                'rsync -avz dist/js sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/latest',
                'rsync -avz dist/css sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/latest',
                'rsync -avz dist/fonts sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/latest',
                'rsync -avz dist/js sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/' + local,
                'rsync -avz dist/css sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/' + local,
                'rsync -avz dist/fonts sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/' + local,
            ].forEach(cmd => {
                exec(cmd,
                  function(err, stdout, stderr) {
                    if (err) throw err;
                    else {
                        console.log('Version ', local, ' published !');
                    }
                });
            });

        } else {
            console.log('Nothing new to publish');
        }
    }
});
