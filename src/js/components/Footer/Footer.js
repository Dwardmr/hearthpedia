import React from 'react';
import GithubIcon from 'react-icons/lib/fa/github';
import styles from './style.css';

export default class Footer extends React.Component{
	render(){
		return(
			<div class={styles.container}>
				<a href="https://github.com/Dwardmr/Hearthpedia">
					<GithubIcon color='white' size={30} />
				</a>
				<p>View this website's source code on GitHub</p>
			</div>
		);
	}
}