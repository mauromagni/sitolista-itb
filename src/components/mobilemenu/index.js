
//dependencies
import { h, Component, render } from 'preact';

//components


//styles
import style from './style';

//DEV ONLY -- fake api call


export default class MobileMenu extends Component {

	state = {
        test: "opk"
	}

	//util functions ----


	// gets called when this route is navigated to
	componentDidMount() {
		console.log("[*] Component MobileMenu Mounted");	

	}

	render( { isMobile }, { test }) {
		

		return (
		<div class={style.mobilemenu}>
			asd<br></br>asdas<br></br>dasdasda<br></br>sda<br></br>sdasda<br></br>sda<br></br>sdasda<br></br>sd
		</div>
	)
	}
}