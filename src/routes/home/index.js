/*
	AUTHOR: Federico D.
	DATE: Feb 2019
	PURPOSE: A Fast cool template for creating directory list websites
*/

//dependencies
import { h } from 'preact';

//components
import ListsFeed from '../../components/listsfeed';

//styles
import style from './style';

const Home = (props) => {
	
	const isMobile = props.isMobile;

	return (
	<div class={style.home}>
		<div id="yo" class={style.searchBarCont}>
			<input
			class={style.searchBar}
			type="text"
			placeholder="Search 103 sites"
			/>
		</div>
		<ListsFeed isMobile={isMobile} />
	</div>
)};

export default Home;
