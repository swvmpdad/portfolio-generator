const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) =>{
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = styleSheet => {
    return new Promise((resolve, reject) =>{
        fs.writeFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'stylesheet copied!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };