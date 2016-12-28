import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';

import SearchBar from '../../components/SearchBar/SearchBar';
import SelectItems from '../../components/SelectItems/SelectItems';
import CheckboxList from '../../components/CheckboxList/CheckboxList';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import styles from './style.css'

export default class SearchName extends React.Component{
	render(){
		const localeArray= [{"labelText": "enUS - American English "}, {"labelText": "enGB - European English"}, {"labelText": "deDE - German"}, {"labelText": "esES - European Spanish"}, {"labelText": "esMX - Latin American Spanish"}, {"labelText": "frFR - French"}, {"labelText": "itIT - Italian"}, {"labelText": "koKR - Korean"}, {"labelText": "plPL - Polish"}, {"labelText": "ptBR - Brazilian Portuguese"}, {"labelText": "ruRU - Russian"}, {"labelText": "zhCN - Simplified Chinese"}, {"labelText": "zhTW - Traditional Chinese"}, {"labelText": "jaJP - Japanese"}, {"labelText": "thTH - Thai"}];
		const cardSets= [{"labelText": "Any"}, {"labelText": "Basic"}, {"labelText": "Classic"}, {"labelText": "Promo"},  {"labelText": "Reward"}, {"labelText": "Naxxramas"}, {"labelText": "Goblins vs Gnomes"}, {"labelText": "Blackrock Mountain"}, {"labelText": "The Grand Tournament"}, {"labelText": "The League of Explorers"}, {"labelText": "Whispers of the Old Gods"}, {"labelText": "Karazhan"}, {"labelText": "Mean Streets of Gadgetzan"}];
		const cardQuality= [{"quality": "Free"}, {"quality": "Common"}, {"quality": "Rare"}, {"quality": "Epic"}, {"quality": "Legandary"}];
		const cardType= [{type: "Any"}, {type: "Hero"}, {type: "Minion"}, {type: "Spell"}, {type: "Enchantment"}, {type: "Weapon"}, {type: "Hero Power"}];
		const heroClass= [{"labelText": "Any"}, {"labelText": "Neutral"}, {"labelText": "Dream"}, {"labelText": "Druid"}, {"labelText": "Hunter"}, {"labelText": "Mage"}, {"labelText": "Paladin"}, {"labelText": "Priest"}, {"labelText": "Rogue"}, {"labelText": "Shaman"}, {"labelText": "Warlock"}, {"labelText": "Warrior"}];
		const factions= [{labelText: "Any"}, {labelText: "Horde"}, {labelText: "Alliance"}, {labelText: "Neutral"}];
		const races= [{labelText: "Any"}, {labelText: "Demon"}, {labelText: "Dragon"}, {labelText: "Mech"}, {labelText: "Murloc"}, {labelText: "Beast"}, {labelText: "Pirate"}, {labelText: "Totem"}];
		const inlineStyles = {
			checkboxIcon:{
				marginRight: "5px",
			},
			tabs:{
				zIndex: 0,
			},
			card:{
				width: "100%",
			},
			subheader:{
				paddingLeft: 0,
			}
		};
		const qualityCheckboxes = cardQuality.map((qItem, i) =>
			<Checkbox
				key={i}
				label={qItem.quality}	
				iconStyle={inlineStyles.checkboxIcon}
			/>
		);
		const typeCheckboxes = cardType.map((qItem, i) =>
			<Checkbox
				key={i}
				label={qItem.type}	
				iconStyle={inlineStyles.checkboxIcon}
			/>
		);
		return(
			<div>
				<h2>Search Cards!</h2>
				<p>Go through the Innkeeper's finest commons.</p>
				<Tabs style={inlineStyles.tabs}>
					<Tab label="Search by Name">
						<div class={styles.verticalDiv} />
						<div class={styles.dataContainer}>
							<div class={styles.inputContainerLarge}>
								<SearchBar
									placeholderText="Card Name"
									borderColor="#FF5722"
								/>
							</div>
						</div>
						<div class={styles.dataContainer}>
							<SelectItems
								labelText="Locale (language)"
								itemsArray={localeArray}
							/>
						</div>	
					</Tab>
					<Tab label="Search by Stats">
						<Subheader style={inlineStyles.subheader}>Attributes:</Subheader>
						<div class={styles.dataContainer}>
							<div class={styles.inputContainerNumber}>
								<SearchBar
									placeholderText="Mana Cost"
									borderColor="#FF5722"
								/>
							</div>
							<div class={styles.spaceDiv} />
							<div class={styles.inputContainerNumber}>
								<SearchBar
									placeholderText="Attack"
									borderColor="#FF5722"
								/>
							</div>
							<div class={styles.spaceDiv} />
							<div class={styles.inputContainerNumber}>
								<SearchBar
									placeholderText="Health"
									borderColor="#FF5722"
								/>
							</div>
							<div class={styles.spaceDiv} />
							<div class={styles.inputContainerNumber}>
								<SearchBar
									placeholderText="Durability"
									borderColor="#FF5722"
								/>
							</div>
						</div>
						<div class={styles.cardContainer}>
							<Card style={inlineStyles.card}>
								<CardHeader
									title="Class"
									actAsExpander={true}
									showExpandableButton={true}
								/>
								<CardText expandable={true}>
									<CheckboxList
										arrayList={heroClass}
									/>
								</CardText>
							</Card>
						</div>
						<div class={styles.verticalDivCard} />
						<div class={styles.cardContainer}>
							<Card style={inlineStyles.card}>
								<CardHeader
									title="Card Set"
									actAsExpander={true}
									showExpandableButton={true}
								/>
								<CardText expandable={true}>
									<CheckboxList
										arrayList={cardSets}
									/>
								</CardText>
							</Card>
						</div>
						<div class={styles.verticalDivCard} />
						<div class={styles.cardContainer}>
							<Card style={inlineStyles.card}>
								<CardHeader
									title="Faction / Race"
									actAsExpander={true}
									showExpandableButton={true}
								/>
								<CardText expandable={true}>
									<Subheader style={inlineStyles.subheader}>Faction:</Subheader>
									<CheckboxList
										arrayList={factions}
									/>
									<Subheader style={inlineStyles.subheader}>Race:</Subheader>
									<CheckboxList
										arrayList={races}
									/>
								</CardText>
							</Card>
						</div>
						<div class={styles.verticalDivSmall} />
						<Subheader style={inlineStyles.subheader}>Card quality:</Subheader>
						<div class={styles.checkboxContainer}>
							{qualityCheckboxes}
						</div>
						<div class={styles.verticalDivSmall} />
						<Subheader style={inlineStyles.subheader}>Card Type:</Subheader>
						<div class={styles.checkboxContainer}>
							{typeCheckboxes}
						</div>
						<div class={styles.dataContainer}>
							<SelectItems
								labelText="Locale (language)"
								itemsArray={localeArray}
							/>
							<div class={styles.spaceDiv} />
							<ToggleSwitch
								labelText="Collectible"
							/>
						</div>	
					</Tab>
				</Tabs>
				<div class={styles.verticalDiv} />
				<div class={styles.dataContainer}>
					<RaisedButton 
						label="Search"
						labelPosition="before"
						secondary={true}
						icon={<SearchIcon />}
						class={styles.searchButton}
					/>
				</div>
			</div>
		);
	}
}