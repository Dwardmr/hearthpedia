import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import Subheader from 'material-ui/Subheader';

import SelectItems from '../../../components/SelectItems/SelectItems';
import SearchBar from '../../../components/SearchBar/SearchBar';
import ToggleSwitch from '../../../components/ToggleSwitch/ToggleSwitch';
import styles from './style.css'

export default class SearchName extends React.Component{
	render(){
		const localeArray= [{"labelText": "enUS - American English "}, {"labelText": "enGB - European English"}, {"labelText": "deDE - German"}, {"labelText": "esES - European Spanish"}, {"labelText": "esMX - Latin American Spanish"}, {"labelText": "frFR - French"}, {"labelText": "itIT - Italian"}, {"labelText": "koKR - Korean"}, {"labelText": "plPL - Polish"}, {"labelText": "ptBR - Brazilian Portuguese"}, {"labelText": "ruRU - Russian"}, {"labelText": "zhCN - Simplified Chinese"}, {"labelText": "zhTW - Traditional Chinese"}, {"labelText": "jaJP - Japanese"}, {"labelText": "thTH - Thai"}];
		const inlineStyles = {
			subheader:{
				paddingLeft: 0,
			}
		};
		return(
			<div>
				<h2>All Cards!</h2>
				<p>Go through the Innkeeper's finest commons.</p>
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
				<Subheader style={inlineStyles.subheader}>Meta:</Subheader>
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
						icon={<SearchIcon />}
						class={styles.searchButton}
					/>
				</div>
			</div>
		);
	}
}