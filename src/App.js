import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { Grid, Segment, Divider } from 'semantic-ui-react';
import './App.css';
import './nprogress.css';

class App extends Component {
	state = {
		events: [],
		locations: [],
		locationSet: 'all',
		eventNo: 32
	};

	componentDidMount() {
		this.mounted = true;

		getEvents().then((events) => {
			if (this.mounted) {
				this.setState({ events, locations: extractLocations(events) });
				this.updateEvents();
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	updateEvents = (location, eventCount) => {
		location = location || this.state.locationSet;
		eventCount = eventCount || this.state.eventNo;
		getEvents().then((events) => {
			const locationEvents = location === 'all' ? events : events.filter((event) => event.location === location);
			this.setState({ events: locationEvents.slice(0, eventCount), locationSet: location, eventNo: eventCount });
		});
	};

	render() {
		const { locationSet } = this.state;
		return (
			<div className="App">
				<Grid className="grid-header" stackable columns={2} divided>
					<div className="header-text">MeetUp!</div>

					<Grid.Row className="grid-row-header">
						<Grid.Column>
							<Segment className="header-segment">
								<CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
								<NumberOfEvents updateEvents={this.updateEvents} />
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Divider horizontal>
					<span className="event-header">{locationSet === 'all' ? 'All Events' : `Events in ${locationSet}`}</span>
				</Divider>
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default App;
