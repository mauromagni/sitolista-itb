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
			const normalizedName = listItem.name.replace(/ /g, "-").toLowerCase();
			return (
				<ListItem>
					<div class={style.masterContainer}>
					<div class={style.listItemDiv}>
						<Image
							src={`/assets/img/favicons/${normalizedName}.png`}
							// src={faviconImg}
							style={`height: 20px; width: 20px;`}
							inline
							rounded
						/>
						<a target="_blank" class={isMobile ? style.singleLink : style.singleLinkDeskt} href={listItem.url}>{listItem.name}</a>
						
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
		let ymeasures, sectStyle, measure;
		if (isMobile) {
			ymeasures = [200, 300, 250];
			measure = ymeasures[Math.floor(Math.random()*ymeasures.length)];
			sectStyle = {maxHeight: measure, overflowY: 'scroll'}
		} else {
			ymeasures = [250];
			measure = ymeasures[Math.floor(Math.random()*ymeasures.length)];
			sectStyle = {height: measure, overflowY: 'scroll'}
		}
		return (
			<ListSection style={sectStyle} >
				{ linkList }
			</ListSection>
		)
	}

	const buildListFeed = (listFeedData) => {
		let feedCards = listFeedData.map( (card, i) => {
			// console.log("[*]", card, i); //debug
			//format the id of the list card
			const cardID = card.categoryName.toLowerCase().replace(/ /g, '-');
			return (
				<Cell width={12} style={{height: 'auto'}}>
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

	//DESKTOP methods
	const buildDesktopListFeed = (listFeedData) => {
		let desktopCards = listFeedData.map( (card, i) => {
			//format the id of the list card
			const cardID = card.categoryName.toLowerCase().replace(/ /g, '-');
			return (
				<Cell key={i} width={4}>
					<div class={style.anchorPoint} id={cardID} />
					<List >
						<ListHeader custom={(<div><h1 class={style.desktopListHeader}>{`${card.categoryEmoji} ${card.categoryName.toUpperCase()}`}</h1><h2 class={style.desktopListSubheader}>{card.categorySubtitle}</h2></div>)} style={{textAlign: 'center'}} title={`${card.categoryEmoji} ${card.categoryName.toUpperCase()}`}  />
						{buildLinkList(card.categoryItems)}
					</List>
				</Cell>
			)
		})
		return (
			<Grid gap="10px" columns={12}>
				{ desktopCards }
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
			<div class={style.desktopListFeedContainer}>
					{ buildDesktopListFeed(listFeedData)}
			</div>
		);
	}
}

export default ListsFeed;
