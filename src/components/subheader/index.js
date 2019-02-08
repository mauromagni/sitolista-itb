import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const SubHeader = (props) => {
	
	const isMobile = props.isMobile;

	if (isMobile) {
		return (
			<div class={style.subHdCont}>
                <p class={style.subHdTxt} >Subheader Annoucement Here</p>
            </div>
		);
	  } else {
		return (
            <div>
                <p>Subheader Annoucement Here</p>
            </div>
		);
	}
}

export default SubHeader;
