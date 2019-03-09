

//dependencies
import { h, Component, render } from 'preact';

//components
import MobileMenu from '../../components/mobilemenu';

//styles
import style from './style';

//DEV ONLY -- fake api call
import fakeApi from '../../utils/api';

export default class Review extends Component {

	state = {
		websiteData: null
	}

	//util functions ----
	//api call
	getWebsiteDataApi() {
		//simulate api call time
		let link = this.props.link.replace(/-/g, ' ');
		setTimeout( () => {
			this.setState({ websiteData: fakeApi.returnWebsiteData(link) });
		}, 1000 );

	}

	

	// gets called when this route is navigated to
	componentDidMount() {
		console.log("[*] Component Review Mounted");	
		console.log("[>] Calling API");
		this.getWebsiteDataApi();
	}

	render( { isMobile, link }, { websiteData }) {
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
						<div class="thumbnail-container">
							<div class={style.websiteImg} >
							<iframe src={`${websiteData.url}`} frameborder="0"></iframe>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
}