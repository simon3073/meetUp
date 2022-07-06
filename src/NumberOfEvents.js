import React, { Component } from 'react';
import { debounce } from 'lodash';
import { Segment } from 'semantic-ui-react';

export default class NumberOfEvents extends Component {
	constructor() {
		super();
		this.state = {
			eventsNumber: 32
		};
		this.updateAppState = debounce(this.updateAppState.bind(this), 500);
		this.handleChangeInput = this.handleChangeInput.bind(this);
	}

	updateAppState = (value) => {
		this.props.updateEvents(null, value);
	};

	handleChangeInput = (event) => {
		this.setState({ eventsNumber: event.target.value });
		this.updateAppState(event.target.value);
	};

	render() {
		return (
			<Segment className="header-segment">
				Number of Events
				<br />
				<input type="number" className="event-number" value={this.state.eventsNumber} onChange={this.handleChangeInput} />
			</Segment>
		);
	}
}
