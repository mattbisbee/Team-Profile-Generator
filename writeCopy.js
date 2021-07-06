const fs = require('fs');

function writeHTML (html) {
    fs.writeFile('./dist/index.html', html, err =>{
        if(err){
            throw err
        }
        console.log("Your new Team Profile is ready to view in the 'dist' folder!")
        copyCSS()
    })
}

const copyCSS = () =>{
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err){
            throw err
        }
    });
}

module.exports = writeHTML, copyCSS