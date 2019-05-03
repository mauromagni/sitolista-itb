import { h, Component } from 'preact';
import { Router } from 'preact-router';
import axios from 'axios';
import api from '../utils/api'

//components
import Header from './header';
import SubHeader from './subheader';
import Footer from './footer';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import Review from '../routes/review'

export default class App extends Component {
	constructor() {
		super();
		let widthWin;
		if (typeof window === "undefined") {
			widthWin = 1000;
		} else {
			widthWin = window.innerWidth;
		}
		this.state = {
		  width: widthWin,
		  showMenu: null
		};
		console.log(api);
	}

	//adds resize listener
	componentWillMount() {
		if (typeof window !== "undefined") {
			window.addEventListener('resize', this.handleWindowSizeChange);
		}
	}
	//removes resize listener
	componentWillUnmount() {
		if (typeof window !== "undefined") {
			window.removeEventListener('resize', this.handleWindowSizeChange);
		}
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

	//api call
	getDirectoryData() {
		// axios.get()

	}

	toggleMenu = () => {
		console.log("MENU OPEN: ", !this.state.showMenu);
        this.setState( {showMenu: !this.state.showMenu} );
    }
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	handleResponsive = () => {
		const { width } = this.state;
		const isMobile = width <= 769;
		return isMobile;
	}

	render() {
		const appStyles = {overflow: 'scroll', tapHighlightColor: 'transparent'}
		const isMobile = this.handleResponsive();
		//build headers
		let headings;
		if (isMobile) {
			headings = (
				<div>
					<Header showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} isMobile={isMobile} />
					<SubHeader isMobile={isMobile} />
				</div>
			)
		} else {
			headings = (
				<div>
				<SubHeader isMobile={isMobile} />
				<Header showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} isMobile={isMobile} />
			</div>
			)
		}
		return (
			<div style={appStyles} id="app">
				{headings}
				<Router onChange={this.handleRoute}>
					<Home showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} isMobile={isMobile} exact path="/" />
					<Review isMobile={isMobile} path="/review/:link" link="test" />
				</Router>
				<Footer isMobile={isMobile} />
			</div>
		);
	}
}
