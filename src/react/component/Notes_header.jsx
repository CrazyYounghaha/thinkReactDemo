import React, { Component, PropTypes } from "react";

class Notes_header extends React.Component{
	render(){
		let value = this.props.value;
		return (
				<div>
					<p>Clicked: { value } times</p>
					<input type="button" value="Click" onClick={ this.props.onClickChange } />
				</div>
		)
	}
}

export default Notes_header;