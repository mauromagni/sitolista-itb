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
								return ( <div class={style.subHdTxt}> <a class={style.backToPage} href="/">Homepage</a> <span class={style.hierarchySymb}>&gt;</span> {window.location.pathname.split('/')[2]} </div> )
							}
					}
					}
				</Match>
			</div>
		);
	  } else {
		return (
            <div>
                <p>Desktop Subheader Annoucement Here</p>
            </div>
		);
	}
}

export default SubHeader;
