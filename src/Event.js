import React, { Component } from 'react';

class Event extends Component {
	state = {
		showDetails: false
	};

	handleButtonClick = () => {
		this.setState({ showDetails: !this.state.showDetails });
	};

	render() {
		const { event } = this.props;
		return (
			<div>
				<div className="event">
					<span className="summary">{event.summary}</span>
					<span className="date">{event.start.dateTime}</span>
					<span className="location">{event.location}</span>
					<button className="details-btn" onClick={this.handleButtonClick}>
						{this.state.showDetails ? 'Hide Details' : 'Show Details'}
					</button>
					{this.state.showDetails ? (
						<div className="event-details">
							<p />
							<span className="event-link">{event.htmlLink}</span>
							<p />
							<span className="event-desc">{event.description}</span>
							<p />
							<span className="event-email">{event.organizer.email}</span>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		);
	}
}

export default Event;
