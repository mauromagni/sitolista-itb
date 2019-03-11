import { h } from 'preact';
import { Link, Match } from 'preact-router/match';
import style from './style';

//media assets
import openMenu from '../../assets/img/menu3d.svg';
import closeMenu from '../../assets/img/stop.svg';
import homeButton from '../../assets/img/homepage.svg';

const Header = (props) => {
	
	const isMobile = props.isMobile;
	const toggleMenu = props.toggleMenu;
	const showMenu = props.showMenu;

	const generateMenuIcon = (menuVisible) => {
		let menuIcon = (
			<Match path="/">
				{ 
					({ matches }) => {
						if (matches) {
							if (!menuVisible || menuVisible === null) {
								menuIcon = (<img class={style.menuBtnIcon} src={openMenu} />)
							} else {
								menuIcon = (<img class={style.menuBtnIcon} src={closeMenu} />)
							}
							return menuIcon
						} else {
							return ( <img class={style.menuBtnIcon} src={homeButton} /> )
						}
				}
				}
			</Match>
		)
		
		return menuIcon;
	}

	if (isMobile) {
		return (
			<header class={style.header}>
				<nav class={style.menuBtn}>
					<Match path="/">
						{ 
							({ matches }) => {
								if (matches) {
									return (
										<Link onClick={() => toggleMenu()} activeClassName={style.active} href="#">
											{ generateMenuIcon(showMenu)}
										</Link>
									)
								} else {
									return (
										<Link onClick={() => console.log("backtohome")}  activeClassName={style.active} href="/">
											{ generateMenuIcon(showMenu)}
										</Link>
									)
								}
						}
						}
					</Match>
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
