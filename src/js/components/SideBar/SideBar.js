import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Info from 'material-ui/svg-icons/action/info';
import Home from 'material-ui/svg-icons/action/home';
import SearchSVG from 'material-ui/svg-icons/action/search';
import FormatColorText from 'material-ui/svg-icons/editor/format-color-text';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

import Paper from 'material-ui/Paper';

import styles from './style.css';

export default class SideBar extends React.Component{
	render(){
		const { pathname } = this.props;
		const menuItemStyle = { searchName: {}, searchCriteria: {}, about: {}, home: { backgroundColor: "#8BC34A"} };
		if (pathname === '/'){
			menuItemStyle.home={
				backgroundColor: "#FF5722",
			}
		} else if (pathname === '/search-name'){
			menuItemStyle.searchName={
				backgroundColor: "rgba(0,0,0,0.2)",
			};
		} else if (pathname.includes('/criteria')){
			menuItemStyle.searchCriteria={
				backgroundColor: "rgba(0,0,0,0.2)",
			};
		} 
		else if (pathname === '/about'){
			menuItemStyle.about={
				backgroundColor: "rgba(0,0,0,0.2)",
			}
		}
		return(
			<Drawer
				open={true}
				docked={true}
			>
				<a href="#/" class={styles.homeButton}>
					<Paper style={menuItemStyle.home} class={styles.homePaper} zDepth={0}>
						<div class={styles.homeTitle}>
							<p>Hearthpedia</p>
						</div>
					</Paper>
				</a>
				<MenuItem primaryText="Search by Name" href="#/search-name" leftIcon={<FormatColorText />} style={menuItemStyle.searchName} />
				<MenuItem primaryText="Search by Criteria" leftIcon={<SearchSVG />} rightIcon={<ArrowDropRight />} style={menuItemStyle.searchCriteria} menuItems={[
						<MenuItem primaryText="All Cards" href="#/criteria/search-all-cards" checked={pathname === '/criteria/search-all-cards'} />,
						<MenuItem primaryText="Single Card" />,
						<MenuItem primaryText="Card Backs" />,
						<MenuItem primaryText="Card Set" />,
						<MenuItem primaryText="Cards by Class" />,
						<MenuItem primaryText="Cards by Faction" />,
						<MenuItem primaryText="Cards by Quality" />,
						<MenuItem primaryText="Cards by Race" />,
						<MenuItem primaryText="Cards by Type" />,
					]}
				/>
				<MenuItem primaryText="About" href="#/about" leftIcon={<Info />} style={menuItemStyle.about} />
			</Drawer>
		);
	}
}