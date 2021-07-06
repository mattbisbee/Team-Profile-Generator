const fs = require('fs');

function writeHTML (html) {
    fs.writeFile('./dist/index.html', html, err =>{
        if(err){
            throw err
        }
        console.log("HTML page has been generated!")
        copyCSS()
    })
}

const copyCSS = () =>{
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err){
            throw err
        }
        console.log('The stylesheet has been copied!')
    });
}

module.exports = writeHTML, copyCSS