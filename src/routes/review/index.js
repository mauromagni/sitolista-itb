

//dependencies
import { h, Component, render } from 'preact';
import { Image} from 'preact-fluid';
import axios from 'axios';

//components
import MobileMenu from '../../components/mobilemenu';

//media
import LoadingAnimation from '../../assets/img/loading.gif'

//styles
import style from './style';

//DEV ONLY -- fake api call
import fakeApi from '../../utils/api';
import { Link } from 'preact-router/match';

export default class Review extends Component {

	state = {
		websiteData: null,
		websiteScreenshot: null
	}

	//util functions ----
	//api call
	getWebsiteDataApi() {
		//simulate api call time
		let link = this.props.link.replace(/-/g, ' ');
		setTimeout( () => {
			const data = fakeApi.returnWebsiteData(link);
			this.setState({ websiteData: data });
			//NOW GET SCREENSHOT
			console.log(data)
			this.getWebsiteThumb(data.url)
		}, 1000 );
	}

	getWebsiteThumb(url) {
		let format;
		if (this.props.isMobile) {
			format = 'mobile'
		} else {
			format = 'desktop'
		}
		//set vars params
		const updateAppState = this.updateAppState;
		const self = this;
		//call
		axios.get(`https://www.googleapis.com/pagespeedonline/v1/runPagespeed?screenshot=true&strategy=${format}&url=${url}`)
		.then(function (response) {
			// handle success
			// console.log(response.data); //debug
			let screenshotBase64 = response.data.screenshot.data.replace(/_/g, '/').replace(/-/g, '+');
			self.setState({ websiteScreenshot: screenshotBase64 });
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
	}

	// gets called when this route is navigated to
	componentDidMount() {
		console.log("[*] Component Review Mounted");	
		console.log("[>] Calling API");
		this.getWebsiteDataApi();
	}

	placeScreenshot(websiteScreenshot) {

		if (websiteScreenshot !== null) {
			return (
				<img alt="screenshot of another website" class={style.websiteImg} src={`data:image/jpeg;base64,${websiteScreenshot}`} />
			)
		} else {
			return (
				<div class={style.loadingScreenshot}>
					<img src={LoadingAnimation} />
				</div>
			)
		}
	}

	generateProCons(listData, attribute) {
		if (!listData) return
		let bulletStyle;
		if (attribute === 'pro') {
			bulletStyle =  style.bulletPRO;
		} else {
			bulletStyle =  style.bulletCON;
		}
		let bullets = listData.map( (listItem, i) => {
			return (
				<li class={bulletStyle} key={i}>{listItem}</li>
			)
		})

		return (
			<ul class={style.reviewBullets}>
				{bullets}
			</ul>
		)
	}

	render( { isMobile, link }, { websiteData, websiteScreenshot }) {
		//loading prompt
		console.log("[*] Page State: ", this.state)

		if (websiteData === null) {
			return (
				<h1>LOADING...</h1>
			)
		}
		console.log(websiteData)
		if (isMobile) {

			return (
				<div class={style.reviewPage}>
					<div class={style.titlesCont}>
						<h1 class={style.websiteTitle}>{websiteData.name}</h1>
						<h2 class={style.websiteSubtitle}>{websiteData.domain.split("/")[0]}</h2>
						<div class={style.websiteImgCnt} >
							<div class={style.fakeBrowserHead}>
								<div class={style.fakeBrowserBarFavi}>
								<Image
									src={`https://www.google.com/s2/favicons?domain=${websiteData.domain}`}
									style={{height: 16, width: 16, marginRight: 5}}
									inline
									rounded
								/>
								<div class={style.fakeBrowserBar}>{websiteData.url.slice(0,35)}</div>
								</div>
							</div>
							{this.placeScreenshot(websiteScreenshot)}
						</div>
						<div class={style.mainReviewContent}>
							<Link class={style.clickHereLink} href={websiteData.url}>Click Here to Visit Website</Link>
							<h3 class={style.reviewSubtitle}>
								Review
								<span
									class={style.infoEmoji}
									role="img"
									aria-label={`more information icon for ${websiteData.domain}`}
									aria-hidden={false}
								>
									ℹ️
								</span>
								
							</h3>
							<p class={style.websiteReview}>
								{websiteData.description}
							</p>
							<h3 class={style.proConSubtl}>
							PROs
								<span
									class={style.infoEmoji}
									role="img"
									aria-label={`more information icon for ${websiteData.domain}`}
									aria-hidden={false}
								>
									✅
								</span>
							</h3>
							{this.generateProCons(websiteData.pro, 'pro')}

							<h3 class={style.proConSubtl}>
							CONs
								<span
									class={style.infoEmoji}
									role="img"
									aria-label={`more information icon for ${websiteData.domain}`}
									aria-hidden={false}
								>
									❌
								</span>
							</h3>
							{this.generateProCons(websiteData.contro, 'con')}
						</div>

					</div>
					<div class={style.backToHome}>
					<span
									class={style.homeEmoji}
									role="img"
									aria-label={`more information icon for ${websiteData.domain}`}
									aria-hidden={false}
								>
									🏠
								</span>
								<Link href="/" class={style.backToHomeLink}>BACK TO HOMEPAGE</Link>
					</div>
				</div>
			)
		} else {
			return (
				<div class={style.globalDeskCont}>
					<div class={style.desktitles}>
						<h1 class={style.websiteTitleDesk}>{websiteData.name}</h1>
						<h2 class={style.websiteSubtitleDesk}>{websiteData.domain.split("/")[0]}</h2>
					</div>
					<div class={style.deskReviewCont}>
						<div class={style.deskWebsiteImgCnt} >
							<div class={style.fakeBrowserHead}>
								<div class={style.fakeBrowserBarFavi}>
								<Image
									src={`https://www.google.com/s2/favicons?domain=${websiteData.domain}`}
									style={{height: 16, width: 16, marginRight: 5}}
									inline
									rounded
								/>
								<div class={style.fakeBrowserBar}>{websiteData.url.slice(0,35)}</div>
								</div>
							</div>
							{this.placeScreenshot(websiteScreenshot)}
						</div>
						<div class={style.reviewTextCont}>
							<h3 class={style.reviewSubtitleDesk}>
								Review
							</h3>
							<p class={style.deskWebsiteReviewTxt}>
								{websiteData.description}
							</p>
							<Link class={style.deskClickHereLink} target="_blank" href={websiteData.url}>Click Here to Visit Website</Link>
						</div>
					</div>
					<div class={style.deskProConsCont}>
						<div class={style.deskPros}>
							<h3 class={style.proConSubtl}>
								PROs
								<span
									class={style.infoEmoji}
									role="img"
									aria-label={`more information icon for ${websiteData.domain}`}
									aria-hidden={false}
								>
									✅
								</span>
							</h3>
							{this.generateProCons(websiteData.pro, 'pro')}
						</div>
						<div class={style.deskCons}>
							<h3 class={style.proConSubtl}>
							CONs
								<span
									class={style.infoEmoji}
									role="img"
									aria-label={`more information icon for ${websiteData.domain}`}
									aria-hidden={false}
								>
									❌
								</span>
							</h3>
							{this.generateProCons(websiteData.contro, 'con')}
						</div>
					</div>	
					<div class={style.deskBackToHome}>
					<span
						class={style.homeEmoji}
						role="img"
						aria-label={`more information icon for ${websiteData.domain}`}
						aria-hidden={false}
					>
						🏠
					</span>
					<Link href="/" class={style.backToHomeLink}>BACK TO HOMEPAGE</Link>
					</div>

				</div>
			)
		}
	}
}