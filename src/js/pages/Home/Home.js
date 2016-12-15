import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

export default class Home extends React.Component{
	render(){
		return(
			<div>
				<h2>Hearthpedia</h2>
				<p>The ultimate yet simple tool to stalk people in Facebook, just paste the link to their profile</p>
				<SearchBar />
			</div>
		);
	}
}