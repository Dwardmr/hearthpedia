import React from 'react';
import TextField from 'material-ui/TextField';
import styles from './style.css';
import { lightGreen500 } from 'material-ui/styles/colors';

export default class SearchBar extends React.Component{
	render(){
		const borderColor = this.props.borderColor ? this.props.borderColor : lightGreen500;
		const inlineStyle = {
			border: {
				borderColor: borderColor,
			},
		}
		return(
			<TextField
				hintText={this.props.placeholderText}
				fullWidth={true}
				underlineFocusStyle={inlineStyle.border}
				class={styles.textField}
			/>
		);
	}
}