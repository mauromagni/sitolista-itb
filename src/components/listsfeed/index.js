import { h } from 'preact';
import { Link } from 'preact-router/match';

import {Grid, Cell} from 'preact-fluid';
import {List, ListHeader, ListSection, ListItem} from 'preact-fluid';
import {Icon} from 'preact-fluid';

import style from './style';

const ListsFeed = (props) => {

	let listSections = (a) => {
		return (
			<ListSection>
				<ListItem
					active={false}
				>
					<div><Link href="/">intro.com</Link></div>
				</ListItem>
				<ListItem
					active={false}
				>
					Hello world
				</ListItem>
				<ListItem
					active={false}
				>
					Hello world
				</ListItem>
				<ListItem
					active={false}
				>
					Hello world
				</ListItem>
			</ListSection>
		)
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
					<Cell width={12}>
					<List>
						<ListHeader title="Title" subtitle="Sub Title"/>
							{listSections("s")}
						</List>
					</Cell>
					<Cell width={12}>
					<List>
						<ListHeader title="Title" subtitle="Sub Title"/>
							{listSections("s")}
						</List>
					</Cell>
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
