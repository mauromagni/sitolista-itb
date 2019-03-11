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
					<div class={style.masterContainer}>
					<div class={style.listItemDiv}>
						<Image
							src={`https://www.google.com/s2/favicons?domain=${listItem.domain}`}
							style={`height: 20px; width: 20px;`}
							inline
							rounded
						/>
						<a target="_blank" class={style.singleLink} href={listItem.url}>{listItem.name}</a>
						
					</div>
					<span
						onClick={()=>console.log("****")}
						className="emoji"
						role="img"
						aria-label={`${listItem.domain} description`}
						aria-hidden={false}
					>
						<a class={style.goToReview} href={`/review/${listItem.name.replace(/ /g, '-').toLowerCase()}`}>🔎</a>
					</span>
					</div>
				</ListItem>
			)
		})
		//get random #
		let ymeasures = [200, 300, 250];
		let measure = ymeasures[Math.floor(Math.random()*ymeasures.length)];
		return (
			<ListSection style={{maxHeight: measure, overflowY: 'scroll'}} >
				{ linkList }
			</ListSection>
		)
	}

	const buildListFeed = (listFeedData) => {
		let feedCards = listFeedData.map( (card, i) => {
			// console.log("[*]", card, i); //debug
			//format the id of the list card
			const cardID = card.categoryName.toLowerCase().replace(' ', '-');
			return (
				<Cell width={12}>
					<div class={style.anchorPoint} id={cardID} />
					<List >
						<ListHeader style={{textAlign: 'center'}} title={`${card.categoryEmoji} ${card.categoryName.toUpperCase()}`}  />
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
