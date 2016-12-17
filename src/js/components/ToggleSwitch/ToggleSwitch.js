import React from 'react';
import Toggle from 'material-ui/Toggle';
import styles from './style.css';

export default class ToggleSwitch extends React.Component{
	render(){
		return(
			<Toggle
				label={this.props.labelText}
				defaultToggled={true}
				class={styles.container}
			/>
		);
	}
}