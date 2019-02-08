/*
	AUTHOR: Federico D.
	DATE: Feb 2019
	PURPOSE: A Fast cool template for creating directory list websites
*/

//dependencies
import { h } from 'preact';

//components
import { TextField } from 'preact-fluid';

//styles
import style from './style';

const Home = () => (
	<div class={style.home}>
		<div id="yo" class={style.searchBarCont}>
			<input
			class={style.searchBar}
			type="text"
			placeholder="Search 103 sites"
			/>
		</div>
	</div>
);

export default Home;
