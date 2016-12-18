import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { 
	lightGreen500,  lightGreen700, grey400,
	deepOrange500, grey100 , grey500,
} from 'material-ui/styles/colors';

import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import SideBar from '../../components/SideBar/SideBar';
import styles from './style.css';

export default class Layout extends React.Component{
	render(){
		const muiTheme = getMuiTheme({
			palette: {
				primary1Color: lightGreen500,
				primary2Color: lightGreen700,
				primary3Color: grey400,
				accent1Color: deepOrange500,
				accent2Color: grey100,
				accent3Color: grey500,
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
					<Footer />
					<SideBar pathname={this.props.location.pathname} />
				</div>
			</MuiThemeProvider>
		);
	}
}