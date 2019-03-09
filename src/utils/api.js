import mockdata from "../data/mockdata.json";
import faqdata from "../data/mockfaq.json"
//TODO check this file's utility and usability in production

const apiFake = {
    returnFullListData: () => mockdata,
    returnFullFaqData: () => faqdata,
    returnWebsiteData: (websiteName) => {
        let found = 0;
        let websiteData = null;
        for (let i = 0; i < mockdata.length; i++) {
            mockdata[i].categoryItems.map((item, i) => {
                if (item.name.toLowerCase() === websiteName.toLowerCase()) {
                    websiteData = item;
                }
            })
        }

        return websiteData;

    }
}

export default apiFake