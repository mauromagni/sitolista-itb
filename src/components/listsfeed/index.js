import { h } from 'preact';
import { Link } from 'preact-router/match';

import {Grid, Cell} from 'preact-fluid';
import {List, ListHeader} from 'preact-fluid';

import style from './style';

const ListsFeed = (props) => {

	let listSections = (a) => {
		return (<p><a href="#">{a}</a></p>)
	}
	
	const isMobile = props.isMobile;

	if (isMobile) {
		return (
			<Grid columns="repeat(auto-fit, minmax(250px, 1fr))" gap="20px">
				<Cell width={1}>
				<List>
					<ListHeader title="Title" subtitle="Sub Title"/>
						{listSections("s")}
					</List>
				</Cell>
			</Grid>
		);
	  } else {
		return (
			<h2>Card Desktop</h2>
		);
	}
}

export default ListsFeed;
