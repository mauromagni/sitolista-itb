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
		this.state = {
		  width: window.innerWidth,
		  showMenu: null
		};
		console.log(api);
	}

	//adds resize listener
	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}
	//removes resize listener
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
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
		const isMobile = width <= 600;
		return isMobile;
	}

	render() {
		const appStyles = {overflow: 'scroll'}
		const isMobile = this.handleResponsive();
		return (
			<div style={appStyles} id="app">
				<Header toggleMenu={this.toggleMenu} isMobile={isMobile} />
				<SubHeader isMobile={isMobile} />
				<Router onChange={this.handleRoute}>
					<Home showMenu={this.state.showMenu} isMobile={isMobile} path="/" />
					<Profile isMobile={isMobile} path="/profile/" user="me" />
					<Profile isMobile={isMobile} path="/profile/:user" />
					<Review isMobile={isMobile} path="/review/:link" link="test" />
				</Router>
				<Footer isMobile={isMobile} />
			</div>
		);
	}
}
