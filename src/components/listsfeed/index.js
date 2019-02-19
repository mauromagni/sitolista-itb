import { h } from 'preact';
import { Link } from 'preact-router/match';

import {Grid, Cell} from 'preact-fluid';
import {List, ListHeader, ListSection, ListItem} from 'preact-fluid';
import {Icon, Image} from 'preact-fluid';

import style from './style';

const ListsFeed = (props) => {

	const  { isMobile, listFeedData } = props;

	const buildLinkList = (linkListData) => {
		let linkList = linkListData.map( (listItem, i) => {
			return (
				<ListItem>
					<div class={style.listItemDiv}>
						<Image
							src={`https://www.google.com/s2/favicons?domain=${listItem.link}`}
							style={`height: 20px; width: 20px;`}
							inline
							rounded
						/>
						<Link class={style.singleLink} href={listItem.url}>{listItem.link}</Link>

					</div>
				</ListItem>
			)
		})
		return (
			<ListSection>
				{ linkList }
			</ListSection>
		)
	}

	const buildListFeed = (listFeedData) => {
		let feedCards = listFeedData.map( (card, i) => {
			console.log("[*]", card, i);
			return (
				<Cell width={12}>
					<List>
						<ListHeader title={card.categoryName} subtitle={card.categorySubtitle} />
						{buildLinkList(card.categoryItems)}
					</List>
				</Cell>
			)
		})
		return (
			<Grid gap="20px" columns={12}>
				{ feedCards }
			</Grid>
		)
	}

	if (isMobile) {
		return (
			<div class={style.mobileListFeedContainer}>
					{ buildListFeed(listFeedData)}
			</div>
		);
	  } else {
		return (
			<h2>desktop version todo</h2>
		);
	}
}

export default ListsFeed;
