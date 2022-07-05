import React, { Component } from 'react';

export default class NumberOfEvents extends Component {
	state = {
		eventsNumber: 32
	};

	handleChangeInput = (event) => {
		this.setState({ eventsNumber: event.target.value });
		this.props.updateEvents(null, event.target.value);
	};

	render() {
		return (
			<div>
				<input type="number" className="event-number" value={this.state.eventsNumber} onChange={this.handleChangeInput} />
			</div>
		);
	}
}
