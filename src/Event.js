import React, { Component } from 'react';

class Event extends Component {
	state = {
		showDetails: false
	};

	handleButtonClick = () => {
		this.setState({ showDetails: !this.state.showDetails });
	};

	render() {
		return (
			<div>
				<div className="event-card">
					<span className="summary"></span>
					<span className="date"></span>
					<span className="location"></span>
					<button className="more-details" onClick={this.handleButtonClick}>
						<div className="event-details-hide">
							<span className="event-link"></span>
							<span className="event-desc"></span>
							<span className="event-email"></span>
						</div>
					</button>
				</div>
			</div>
		);
	}
}

export default Event;
