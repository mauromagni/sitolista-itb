import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Footer = (props) => {
	
	const isMobile = props.isMobile;

	if (isMobile) {
		return (
			<footer class={style.footerContainerMob} >
				<p class={style.footerCopyText}>© 2019 directoryWebsite - Reviews The Best Sites! 👍🏼</p>
			</footer>
		);
	  } else {
		return (
			<footer class={style.footerContainerDesk}>
			<hr></hr>
				<p class={style.footerCopyText}>© 2019 directoryWebsite - Reviews The Best Sites! 👍🏼</p>
			</footer>
		);
	}
}

export default Footer;
