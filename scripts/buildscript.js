const fs = require('fs');

let rawdata = fs.readFileSync('src/data/websitesdata.json');

let websitesdata = JSON.parse(rawdata);  

for (let i = 0; i < websitesdata.length ; i++) {
    websitesdata[i].categoryItems.forEach(categoryItem => {
        console.log(categoryItem.domain)
    });
}