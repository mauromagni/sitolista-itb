import websitesdata from "../data/websitesdata.json";
import faqdata from "../data/mockfaq.json"
//TODO check this file's utility and usability in production

const apiFake = {
    returnFullListData: () => websitesdata,
    returnFullFaqData: () => faqdata,
    returnWebsiteData: (websiteName) => { //or (websiteID)
        let found = 0;
        let websiteData = null;
        for (let i = 0; i < websitesdata.length; i++) {
            websitesdata[i].categoryItems.map((item, i) => {
                if (item.name.toLowerCase() === websiteName.toLowerCase()) {
                    websiteData = item;
                }
            })
        }

        return websiteData;

    }
}

export default apiFake