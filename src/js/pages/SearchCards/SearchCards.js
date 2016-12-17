import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Search from 'material-ui/svg-icons/action/Search';
import { Tabs, Tab } from 'material-ui/Tabs';
import Checkbox from 'material-ui/Checkbox';

import SearchBar from '../../components/SearchBar/SearchBar';
import SelectItems from '../../components/SelectItems/SelectItems';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import styles from './style.css'

export default class SearchCards extends React.Component{
	render(){
		const localeArray= [{"labelText": "enUS - American English "}, {"labelText": "enGB - European English"}, {"labelText": "deDE - German"}, {"labelText": "esES - European Spanish"}, {"labelText": "esMX - Latin American Spanish"}, {"labelText": "frFR - French"}, {"labelText": "itIT - Italian"}, {"labelText": "koKR - Korean"}, {"labelText": "plPL - Polish"}, {"labelText": "ptBR - Brazilian Portuguese"}, {"labelText": "ruRU - Russian"}, {"labelText": "zhCN - Simplified Chinese"}, {"labelText": "zhTW - Traditional Chinese"}, {"labelText": "jaJP - Japanese"}, {"labelText": "thTH - Thai"}];
		const cardSets= [{"labelText": "Any"}, {"labelText": "Basic"}, {"labelText": "Classic"}, {"labelText": "Promo"},  {"labelText": "Reward"}, {"labelText": "Naxxramas"}, {"labelText": "Goblins vs Gnomes"}, {"labelText": "Blackrock Mountain"}, {"labelText": "The Grand Tournament"}, {"labelText": "The League of Explorers"}, {"labelText": "Whispers of the Old Gods"}, {"labelText": "Karazhan"}, {"labelText": "Mean Streets of Gadgetzan"}];
		const cardQuality= [{"quality": "Free"}, {"quality": "Common"}, {"quality": "Rare"}, {"quality": "Epic"}, {"quality": "Legandary"}];
		const inlineStyles = {
			checkboxIcon: {
				marginRight: "5px",
			}
		};
		const qualityCheckboxes = cardQuality.map((qItem, i) =>
			<Checkbox
				key={i}
				label={qItem.quality}	
				iconStyle={inlineStyles.checkboxIcon}
			/>
		);
		return(
			<div>
				<h2>Search Cards!</h2>
				<p>Go through the Innkeeper's finest commons.</p>
				<Tabs>
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
						<div class={styles.verticalDiv} />
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
							<div class={styles.spaceDiv} />
							<ToggleSwitch
								labelText="Collectible"
							/>
						</div>
						<div class={styles.verticalDivSmall} />
						<div class={styles.checkboxContainer}>
							{qualityCheckboxes}
						</div>
						<div class={styles.dataContainer}>
							<SelectItems
								labelText="Locale (language)"
								itemsArray={localeArray}
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
						icon={<Search />}
						class={styles.searchButton}
					/>
				</div>
			</div>
		);
	}
}