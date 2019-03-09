

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
		//set vars params
		const updateAppState = this.updateAppState;
		const self = this;
		//call
		console.log("PROPI", this.props)
		axios.get(`https://www.googleapis.com/pagespeedonline/v1/runPagespeed?screenshot=true&strategy=mobile&url=${url}`)
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

	render( { isMobile, link }, { websiteData, websiteScreenshot }) {
		//loading prompt
		console.log("[*] Page State: ", this.state)
		if (isMobile) {
			if (websiteData === null) {
				return (
					<h1>LOADING...</h1>
				)
			}

			return (
				<div class={style.reviewPage}>
					<div class={style.titlesCont}>
						<h1 class={style.websiteTitle}>{websiteData.name}</h1>
						<h2 class={style.websiteSubtitle}>{websiteData.domain}</h2>
						<div class={style.websiteImgCnt} >
							<div class={style.fakeBrowserHead}>
								<div class={style.fakeBrowserBarFavi}>
								<Image
									src={`https://www.google.com/s2/favicons?domain=${websiteData.domain}`}
									style={`height: 20px; width: 20px; margin-right: 5px`}
									inline
									rounded
								/>
								<div class={style.fakeBrowserBar}>{websiteData.url}</div>
								</div>
							</div>
								{this.placeScreenshot(websiteScreenshot)}
						</div>
					</div>
				</div>
			)
		}
	}
}