import React from 'react';
import AppBar from 'material-ui/AppBar';
import styles from './style.css';

export default class Nav extends React.Component{
	render(){
		return(
			<div class={styles.appBar}>
					<AppBar
						title="Artemise"
						zDepth={0}
					/>
			</div>
		);
	}
}