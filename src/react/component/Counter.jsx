import $ from '../../../www/static/js/jquery.min';
import React, {Component, PropTypes} from 'react'

class Counter extends Component {

		// incrementIfOdd() {
		// 		if (this.props.value % 2 !== 0) {
		// 				this.props.onIncrement()
		// 		}
		// }
		//
		// incrementAsync() {
		// 		setTimeout(this.props.onIncrement, 1000)
		// }
		constructor(props) {
				super(props);
				this.state = {
						value: 0
				};
		}

		componentDidMount() {
				$.post("/index/test", function (result) {
						let data = result[0];
						console.log(data);
						this.setState({
								value: data
						});
				}.bind(this));
		}

		render() {
				const {value} = this.state;
				return (
						<p>
								Clicked: {value} times
						</p>
				)
		}
}

Counter.propTypes = {
		value: PropTypes.number.isRequired
		// onIncrement: PropTypes.func.isRequired,
		// onDecrement: PropTypes.func.isRequired
};

export default Counter;