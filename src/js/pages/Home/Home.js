import React from 'react';
import Divider from 'material-ui/Divider';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './style.css';

export default class Home extends React.Component{
	render(){
		return(
			<div>
				<h2>Howdy!</h2>
				<Divider />
				<p>Get top decked!</p>
				<div class={styles.inputContainer}>
				<SearchBar 
					placeholderText="www.google.com"
				/>
				</div>
			</div>
		);
	}
}