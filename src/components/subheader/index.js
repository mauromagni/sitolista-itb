import { h } from 'preact';
import { Router } from 'preact-router';
import { Match } from 'preact-router/match';

import style from './style';

const SubHeader = (props) => {
	
	const isMobile = props.isMobile;

	if (isMobile) {
		return (
			<div class={style.subHdCont}>
				<Match path="/">
					{ 
						({ matches }) => {
							if (matches) {
								return ( <p class={style.subHdTxt} >Bookmark this website!</p> )
							} else {
								let sublocation = window.location.pathname.split('/')[2].replace(/-/g, ' ');
								return ( <div class={style.subHdTxt}> <a class={style.backToPage} href="/">Homepage</a> <span class={style.hierarchySymb}>&gt;</span> {sublocation[0].toUpperCase() + sublocation.slice(1)} </div> )
							}
					}
					}
				</Match>
			</div>
		);
	  } else {
		return (
            <div class={style.desktopCont}>
                <text class={style.desktopText}>Welcome to the Desktop version! Press CMD + D to Bookmark these golden nuggets!</text>
            </div>
		);
	}
}

export default SubHeader;
