import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const SearchBar = (props) => {
	
	const isMobile = props.isMobile;

	const getTodayDate = () => {
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth() + 1; //January is 0!
		let yyyy = today.getFullYear();

		if (dd < 10) {
			dd = '0' + dd;
		}

		if (mm < 10) {
			mm = '0' + mm;
		}

		today = mm + '/' + dd + '/' + yyyy;
		return today;
	}

	if (isMobile) {
		return (
			<div id="yo" class={style.searchBarCont}>
				{/* <input
                    class={style.searchBar}
                    type="text"
                    placeholder="Searchbar component"
				/> */}
			</div>
		);
	  } else {
		return (
            <div class={style.dskSearchCnt}>
								{/* 
                <input
                    class={style.searchBarDesktop}
                    type="text"
                    placeholder="Searchbar component"
								/>
								*/}
								<p class={style.clickIconForRev}>Click on the <span>🔎</span>to see reviews!</p>
								<p class={style.updatedText}>Updated on <strong>{getTodayDate()}</strong></p>
            </div>
		);
	}
}

export default SearchBar;
