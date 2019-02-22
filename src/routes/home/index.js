/*
	AUTHOR: Federico D.
	DATE: Feb 2019
	PURPOSE: A Fast cool template for creating directory list websites
*/

//dependencies
import { h, Component, render } from 'preact';

//components
import ListsFeed from '../../components/listsfeed';
import SearchBar from '../../components/searchbar';

//styles
import style from './style';

//DEV ONLY -- fake api call
import data from '../../data/mockdata.json';

export default class Home extends Component {

	state = {
		test: "success",
		data: null
	}

	//util functions ----
	//api call
	getDataApi() {
		//simulate api call time
		setTimeout( () => {
			this.setState({ data })
		}, 1000 );

	}

	// gets called when this route is navigated to
	componentDidMount() {
		console.log("[*] Component Home Mounted")	
		console.log("[>] Calling API")
		this.getDataApi()
	}

	render( { isMobile }, { test, data }) {
		//loading prompt
		if (data === null) {
			return (
				<h1>LOADING...</h1>
			)
		}

		return (
		<div class={style.home}>
			<SearchBar isMobile={isMobile} />
			<ListsFeed listFeedData={data} isMobile={isMobile} />
		</div>
	)
	}
}