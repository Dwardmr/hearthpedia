import React from 'react';
import Divider from 'material-ui/Divider';

export default class About extends React.Component{
	render(){
		return(
			<div>
				<h2>Who are we?</h2>
				<Divider />
				<p>A skill-based website</p>
			</div>
		);
	}
}