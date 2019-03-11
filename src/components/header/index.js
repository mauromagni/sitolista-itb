import { h } from 'preact';
import { Link, Match } from 'preact-router/match';
import style from './style';

//media assets
import openMenu from '../../assets/img/menu3d.svg';
import closeMenu from '../../assets/img/stop.svg';
import homeButton from '../../assets/img/homepage.svg';
import desktopLogo from '../../assets/img/titolone1.png'

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
		//DESKTOP VERSIOOON
		return (
			<header class={style.headerDesk}>
				{/* <h1 class={style.bigDeskBanner}>DIRECTORYWEBSITE</h1> */}
				<img src={desktopLogo} class={style.bigDeskBanner}>DIRECTORYWEBSITE.COM</img>
				<nav class={style.headerTxtCnt}>
					<text class={style.dskHeaderQuest}>Tired of searching for niche-related websites?</text>
					<text class={style.dskHeaderPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </text>
				</nav>
			</header>
		);
	}
}

export default Header;
