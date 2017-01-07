import React, {Component, PropTypes} from 'react'
import { connect } from "react-redux"
import Notes_header from "./Notes_header.jsx"
import { testFunc } from "../action/action.jsx"

class Counter extends React.Component {

		constructor(props) {
				super(props);
				this.state = {
						value: 123123
				};
		}

		onClickChange() {
			this.props.dispatch(testFunc());
				// $.post("/index/test", function (result) {
				// 		let personDetail = result.data;
				// 		// console.log(result);
				// 		// console.log(personDetail.id);
				// 		this.setState({
				// 				value: personDetail.mobile
				// 		});
				// }.bind(this));
		}

		render() {
				let {value} = this.props;
				return (
						<div>
						<Notes_header value={value} onClickChange={this.onClickChange.bind(this) } />
						</div>
						// <p>
						// 		Clicked: {value} times
						// </p>
				)
		}
}

// Counter.propTypes = {
// 		value: PropTypes.number.isRequired
// 		// onIncrement: PropTypes.func.isRequired,
// 		// onDecrement: PropTypes.func.isRequired
// };

function select (state){
	return {
		value : state.value
	}
}

export default connect(select)(Counter);