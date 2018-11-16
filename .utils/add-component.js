var fs = require('fs');
var fse = require('fs-extra');
var replace = require('replace-in-file');

var comp_name = process.argv ? process.argv[2].split('--name=')[1] : (process.env.npm_config_name || null);

if(comp_name == null) {
    console.log('\x1b[31m%s\x1b[0m', 'Err usage');
    console.log('\x1b[31m%s\x1b[0m', 'yarn add-component --name=comp-name');
    return;
}
console.log('Ajout du composant', comp_name);

fse.copy('.utils/component-template', 'src/components/'+comp_name)
    .then(() => {

console.log('Remplacement des variables...');
        var opts = {
            files: 'src/components/'+comp_name+'/*.*',
            from: new RegExp('component-name', 'g'),
            to: comp_name,
        };
        console.log(opts);
        console.log(replace.sync(opts));

console.log('Remplacement des noms de fichiers...');
        fs.readdirSync('src/components/'+comp_name, {withFileTypes: true})
            .filter(dirent => !dirent.isDirectory())
            .filter(dirent => dirent.name.startsWith('component-name'))
            .map(dirent => {
                var old_name = 'src/components/' + comp_name + '/' + dirent.name,
                    new_name = 'src/components/' + comp_name + '/' + dirent.name.replace('component-name', comp_name)
                ;
                fse.move(old_name, new_name)
                    .then(() => {
                        console.log('Succesfully renamed', old_name ,'into', new_name);
                    })
                    .catch(err => {
                        console.log('\x1b[31m%s\x1b[0m', err);
                    })
                ;
            })
        console.log('\x1b[32m%s\x1b[0m', 'success!');
    })
    .catch(err => {
        console.log('\x1b[31m%s\x1b[0m', err);

    })

