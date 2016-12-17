import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Info from 'material-ui/svg-icons/action/info';
import Home from 'material-ui/svg-icons/action/home';
import Explore from 'material-ui/svg-icons/action/explore';

import Paper from 'material-ui/Paper';

import styles from './style.css';

export default class SideBar extends React.Component{
	render(){
		const { pathname } = this.props;
		const menuItemStyle = {
			search: {}, about: {}, home: { backgroundColor: "#8BC34A"}
		}
		if (pathname === '/'){
			menuItemStyle.home={
				backgroundColor: "#FF5722",
			}
		} else if (pathname === '/search'){
			menuItemStyle.search={
				backgroundColor: "rgba(0,0,0,0.2)",
			};
		} else if (pathname === '/about'){
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
				<MenuItem primaryText="Search Cards" href="#/search" leftIcon={<Explore />} style={menuItemStyle.search} />
				<MenuItem primaryText="About" href="#/about" leftIcon={<Info />} style={menuItemStyle.about} />
			</Drawer>
		);
	}
}