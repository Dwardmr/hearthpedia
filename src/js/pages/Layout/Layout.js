import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { 
	lightGreen500,  lightGreen700, lightGreen800,
	deepOrange500, deepOrange700, deepOrange900,
} from 'material-ui/styles/colors';

import Nav from '../../components/Nav/Nav';
import SideBar from '../../components/SideBar/SideBar';
import styles from './style.css';

export default class Layout extends React.Component{
	render(){
		const muiTheme = getMuiTheme({
			palette: {
				primary1Color: lightGreen500,
				primary2Color: lightGreen700,
				primary3Color: lightGreen800,
				accent1Color: deepOrange500,
				accent2Color: deepOrange700,
				accent3Color: deepOrange900,
			},
		});
		return(
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Nav pathname={this.props.location.pathname} />
					<div class={styles.masonry}>
						<div class={styles.container}>
							{this.props.children}
						</div>
					</div>
					<SideBar pathname={this.props.location.pathname} />
				</div>
			</MuiThemeProvider>
		);
	}
}