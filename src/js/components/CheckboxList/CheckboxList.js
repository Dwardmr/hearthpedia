import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import styles from './style.css';

export default class CheckboxList extends React.Component{
	render(){
		const inlineStyles = {
			checkboxIcon:{
				marginRight: "5px",
			}
		}
		const checkboxes = this.props.arrayList.map((cItem, i) => 
			<Checkbox
				key={i}
				label={cItem.labelText}
				iconStyle={inlineStyles.checkboxIcon}
			/>
		);
		return(
			<div>
				{checkboxes}
			</div>
		);
	}
}