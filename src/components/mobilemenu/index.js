
//dependencies
import { h, Component, render } from 'preact';

//components
import { Link } from 'preact-router/match';
import { Image } from 'preact-fluid';

//styles
import style from './style';

//DEV ONLY -- fake api call


export default class MobileMenu extends Component {

	state = {
        menuOpen: true
	}

	//util functions ----


	// gets called when this route is navigated to
	componentDidMount() {
		console.log("[*] Component MobileMenu Mounted");	
    }

    generateFavicons(linkData) {
        let favicons;
        console.log(linkData);
        favicons = linkData.slice(0, 5).map( (link, i) => {
            return (
                <Image
                src={`https://www.google.com/s2/favicons?domain=${link.domain}`}
                style={{padding: '0.5vw'}}
                inline
                rounded
                />
            )
        })

        return (
            <div class={style.mobileMenuIconsContainer}>
                {favicons} ... <span class={style.numOfLinks}>{linkData.length}</span>
            </div>
        )
    }
    
    generateMobMenu(listFeedData) {
        let mobMenuList;

        mobMenuList = listFeedData.map(
            (categoryItem, i ) => {
                console.log(categoryItem);
                return (
                    <li key={`category-${i}`} class={i % 2 === 0 ? style.category1 : style.category2 }>
                        <span class={style.categoryEmojiMob}>
                            {categoryItem.categoryEmoji}
                        </span>
                        <div class={style.rightMenuLinkMob}>
                            <Link class={style.categoryLink} href="/">{categoryItem.categoryName}</Link>

                            {
                                this.generateFavicons(categoryItem.categoryItems)
                            }

                        </div> 
                    </li>
                )
            }
        )

        return (
            <ul>
                {mobMenuList}
            </ul>
        )
    }

	render( { isMobile, listFeedData }, { test }) {
        
        //do not render on desktop
        console.log(isMobile)
        if (isMobile === false) return ;
		

		return (
            <div class={style.mobilemenu}>
                <div class={style.goToHomepageTitle}>
                    HOMEPAGE
                </div>
                <div class={style.goToHomepage}>
                    <span style={{fontSize: '2rem'}}>🏠</span><Link class={style.homeLink} href="/">{window.location.hostname.toUpperCase()}</Link>
                </div>
                <div class={style.goToHomepageTitle}>
                    CATEGORIES
                </div>

                {this.generateMobMenu(listFeedData)}

            </div>
        )
	}
}