
//dependencies
import { h, Component, render } from 'preact';

//components
import SearchBar from '../../components/searchbar';

//styles
import style from './style';

export default class Review extends Component {

	state = {
		test: "success"
	}


	render( { isMobile, link }, { test }) {
        
		return (
		<div class={style.home}>
			<SearchBar isMobile={isMobile} />
			<p>Review page for {link}</p>
		</div>
	)
	}
}