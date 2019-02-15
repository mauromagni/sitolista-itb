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
			<div class={style.mobileListFeedContainer}>
				<Grid gap="20px" columns={12}>
					<Cell width={12}>
					<List>
						<ListHeader title="Title" subtitle="Sub Title"/>
							{listSections("s")}
						</List>
					</Cell>
				</Grid>
			</div>
		);
	  } else {
		return (
			<h2>todo</h2>
		);
	}
}

export default ListsFeed;
