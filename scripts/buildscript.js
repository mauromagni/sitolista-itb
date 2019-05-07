const fs = require('fs');
const download = require('image-downloader');

let rawdata = fs.readFileSync('src/data/websitesdata.json');

let websitesdata = JSON.parse(rawdata);  

for (let i = 0; i < websitesdata.length ; i++) {
    websitesdata[i].categoryItems.forEach(categoryItem => {
        let normalizedName = categoryItem.name.replace(/ /g, "-");
        const options = {
            url: `https://www.google.com/s2/favicons?domain=${categoryItem.domain}`,
            dest: `src/assets/img/favicons/${normalizedName}.png`
        }

        download.image(options)
        .then(({ filename, image }) => {
            console.log('File saved to', filename)
        })
        .catch((err) => {
            console.error(err)
        })
    });
}