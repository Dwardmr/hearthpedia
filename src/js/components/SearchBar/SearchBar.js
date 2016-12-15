import React from 'react';
import TextField from 'material-ui/TextField';
import styles from './style.css';

export default class SearchBar extends React.Component{
	render(){
		return(
			<div class={styles.inputContainer}>
			<TextField
				hintText="www.facebook.com/google"
				fullWidth={true}
			/>
			</div>
		);
	}
}