import React from 'react';
import AppBar from 'material-ui/AppBar';
import styles from './style.css';

export default class Nav extends React.Component{
	render(){
		const { pathname } = this.props;
		const customStyle ={
			navBar: { backgroundColor: "#8BC34A" }
		}
		if (pathname === '/'){
			customStyle.navBar = {
				backgroundColor: "#FF5722",
			}
		}
		return(
			<div class={styles.appBar}>
					<AppBar
						title="Artemise"
						zDepth={0}
						style={customStyle.navBar}
					/>
			</div>
		);
	}
}