import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = (props) => {
	
	const isMobile = props.isMobile;
	const toggleMenu = props.toggleMenu;
	const showMenu = props.showMenu;

	const generateMenuIcon = (menuVisible) => {
		let menuIcon;
		if (!menuVisible || menuVisible === null) {
			menuIcon = (<img class={style.menuBtnIcon} src={"../../assets/img/menu3d.svg"} />)
		} else {
			menuIcon = (<img class={style.menuBtnIcon} src={"../../assets/img/stop.svg"} />)
		}
		return menuIcon;
	}

	if (isMobile) {
		return (
			<header class={style.header}>
				<nav class={style.menuBtn}>
					<Link onClick={() => toggleMenu()} activeClassName={style.active} href="#">
						{ generateMenuIcon(showMenu)}
					</Link>
				</nav>
				<h1 class={style.bannerMob}>DirectoryWebsite.com</h1>

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
