import fs from 'fs';
import download from 'image-downloader';

//read raw json file and parse it
const rawdata = fs.readFileSync('src/data/websitesdata.json');
const websitesdata = JSON.parse(rawdata);  

//counter variable
let counter = 0

//loop thru the websites and download their favicons
for (let i = 0; i < websitesdata.length ; i++) {
    websitesdata[i].categoryItems.forEach(categoryItem => {
        let normalizedName = categoryItem.name.replace(/ /g, "-").toLowerCase();
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