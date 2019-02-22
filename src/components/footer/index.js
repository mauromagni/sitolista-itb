import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Footer = (props) => {
	
	const isMobile = props.isMobile;

	if (isMobile) {
		return (
			<footer class={style.header}>
				<p>Footer mobile</p>
			</footer>
		);
	  } else {
		return (
			<footer class={style.header}>
				<p>Footer Desktop</p>
			</footer>
		);
	}
}

export default Footer;
