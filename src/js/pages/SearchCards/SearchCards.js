import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Search from 'material-ui/svg-icons/action/Search';
import { Tabs, Tab } from 'material-ui/Tabs';

import SearchBar from '../../components/SearchBar/SearchBar';
import SelectItems from '../../components/SelectItems/SelectItems';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import styles from './style.css'

export default class SearchCards extends React.Component{
	render(){
		const localeArray= [{"labelText": "enUS - American English "}, {"labelText": "enGB - European English"}, {"labelText": "deDE - German"}, {"labelText": "esES - European Spanish"}, {"labelText": "esMX - Latin American Spanish"}, {"labelText": "frFR - French"}, {"labelText": "itIT - Italian"}, {"labelText": "koKR - Korean"}, {"labelText": "plPL - Polish"}, {"labelText": "ptBR - Brazilian Portuguese"}, {"labelText": "ruRU - Russian"}, {"labelText": "zhCN - Simplified Chinese"}, {"labelText": "zhTW - Traditional Chinese"}, {"labelText": "jaJP - Japanese"}, {"labelText": "thTH - Thai"}];
		const cardSets= [{"labelText": "Basic"}, {"labelText": "Classic"}, {"labelText": "Promo"},  {"labelText": "Reward"}, {"labelText": "Naxxramas"}, {"labelText": "Goblins vs Gnomes"}, {"labelText": "Blackrock Mountain"}, {"labelText": "The Grand Tournament"}, {"labelText": "The League of Explorers"}, {"labelText": "Whispers of the Old Gods"}, {"labelText": "Karazhan"}, {"labelText": "Mean Streets of Gadgetzan"}];
		return(
			<div>
				<h2>Search Cards!</h2>
				<Divider />
				<p>Go through the Innkeeper's finest commons.</p>
				<div class={styles.dataContainer}>
					<div class={styles.inputContainerLarge}>
						<SearchBar
							placeholderText="Seach a Card by Name"
							borderColor="#FF5722"
						/>
					</div>
				</div>
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
				<div class={styles.dataContainer}>
					<SelectItems
						labelText="Card Set"
						itemsArray={cardSets}
					/>
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
				<div class={styles.verticalDiv} />
				<div class={styles.dataContainer}>
					<RaisedButton 
						label="Search"
						labelPosition="before"
						secondary={true}
						icon={<Search />}
						class={styles.searchButton}
					/>
				</div>
			</div>
		);
	}
}