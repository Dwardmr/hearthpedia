import React from 'react';
import Divider from 'material-ui/Divider';
import SearchBar from '../../components/SearchBar/SearchBar';

export default class Home extends React.Component{
	render(){
		return(
			<div>
				<h2>Howdy!</h2>
				<Divider />
				<p>Get top decked!</p>
				<SearchBar />
			</div>
		);
	}
}