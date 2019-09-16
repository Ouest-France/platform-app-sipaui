var exec = require('child_process').exec
var fs = require("fs");

var package_content = fs.readFileSync("./package.json");
if(!package_content || !JSON.parse(package_content) || !JSON.parse(package_content).version) {
    console.log("error reading version from package");
}
package_content = JSON.parse(package_content);

var child = exec('npm show sipa-ui version',
  function(err, stdout, stderr) {
    if (err) throw err;
    else {
        var distant = stdout.trim();
        var local = package_content.version;
        console.log('check version', distant, local);
        if(distant != local) {

            package_content.devDependencies = {};
            package_content.dependencies = {};
            package_content.scripts = {"test": "echo \"Error: no test specified\" && exit 1"};

            fs.writeFileSync("./package.json", JSON.stringify(package_content, null, 2));

            [
                'npm publish',
                'rsync -avz dist/js sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/latest',
                'rsync -avz dist/css sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/latest',
                'rsync -avz dist/fonts sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/latest',
                'rsync -avz dist/images sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/latest',
                'rsync -avz dist/js sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/' + local,
                'rsync -avz dist/css sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/' + local,
                'rsync -avz dist/fonts sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/' + local,
                'rsync -avz dist/images sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/' + local,
                'rsync -avz dist/js sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/' + local.slice(0, local.indexOf('.')),
                'rsync -avz dist/css sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/' + local.slice(0, local.indexOf('.')),
                'rsync -avz dist/fonts sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/' + local.slice(0, local.indexOf('.')),
                'rsync -avz dist/images sshacs@static-of.scp.upload.akamai.com:/487320/sipaui/' + local.slice(0, local.indexOf('.')),
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
