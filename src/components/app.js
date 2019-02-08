import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
		  width: window.innerWidth,
		};
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
		const isMobile = this.handleResponsive();
		return (
			<div id="app">
				<Header isMobile={isMobile} />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
