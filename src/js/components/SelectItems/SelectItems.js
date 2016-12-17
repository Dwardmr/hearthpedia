import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class SelectItems extends React.Component{
	constructor(){
		super();
		this.state = {
			value: 0,
		}
	}
	handleChange = (event, index, value) => {
		this.setState({value});
	}
	render(){
		const { labelText, itemsArray } = this.props;
		const menuItems = itemsArray.map((mItem, i) =>
			<MenuItem
				value={i}
				key={i}
				primaryText={mItem.labelText}
			/>
		);
		return(
			<SelectField
				floatingLabelText={labelText}
				value={this.state.value}
				onChange={this.handleChange}
			>
				{menuItems}
			</SelectField>
		);
	}
}