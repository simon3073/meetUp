import React, { Component } from 'react';
import { Button, Label, Icon } from 'semantic-ui-react';

class Event extends Component {
	state = {
		showDetails: false
	};

	handleButtonClick = () => {
		this.setState({ showDetails: !this.state.showDetails });
	};

	displayDate = (d) => {
		const date = new Date(d);
		return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
	};

	render() {
		const { event } = this.props;
		return (
			<div>
				<div className="event">
					<span className="summary">
						<h2>{event.summary}</h2>
					</span>
					<p className="date">{this.displayDate(event.start.dateTime)}</p>
					<p className="location">{event.location}</p>
					<Button inverted color="yellow" className="details-btn" size="large" onClick={this.handleButtonClick}>
						{this.state.showDetails ? 'Hide Details' : 'Show Details'}
					</Button>

					{this.state.showDetails ? (
						<div className="event-details">
							<a className="event-link" href="{event.htmlLink}">
								Google Calendar Event
							</a>
							<p className="event-desc">{event.description}</p>
							<Label color="teal" className="event-email" size="large">
								<Icon name="mail" />
								<a href="mailto:{event.organizer.email}">Email for more info</a>
							</Label>
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
