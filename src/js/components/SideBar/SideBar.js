import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Home from 'material-ui/svg-icons/action/home';
import styles from './style.css';

export default class SideBar extends React.Component{
	render(){
		return(
			<Drawer
				open={true}
				docked={true}
			>
				<div class={styles.homeTitle}>
					<p>Artemise</p>
				</div>
				<MenuItem primaryText="Home" leftIcon={<Home />} />
			</Drawer>
		);
	}
}