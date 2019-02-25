import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = (props) => {
	
	const isMobile = props.isMobile
	const toggleMenu = props.toggleMenu

	if (isMobile) {
		return (
			<header class={style.header}>
				<h1 class={style.bannerMob}>Big Mobile Banner Here</h1>
				<nav class={style.menuBtn}>
					<Link onClick={() => toggleMenu()} activeClassName={style.active} href="#">MENU</Link>
				</nav>
			</header>
		);
	  } else {
		return (
			<header class={style.header}>
				<h1>Big Desktop Banner Here</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link activeClassName={style.active} href="/profile">Me</Link>
					<Link activeClassName={style.active} href="/profile/john">John</Link>
				</nav>
			</header>
		);
	}
}

export default Header;
