import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const SearchBar = (props) => {
	
	const isMobile = props.isMobile;

	if (isMobile) {
		return (
			<div id="yo" class={style.searchBarCont}>
				<input
                    class={style.searchBar}
                    type="text"
                    placeholder="Searchbar component"
				/>
			</div>
		);
	  } else {
		return (
            <div>
                <p>desktop searchbar coming soon</p>
            </div>
		);
	}
}

export default SearchBar;
