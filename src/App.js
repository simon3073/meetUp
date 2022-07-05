import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
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
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	updateEvents = (location = null, eventCount = null) => {
		location = location || this.state.locationSet;
		eventCount = eventCount || this.state.eventNo;
		getEvents().then((events) => {
			const locationEvents = location === 'all' ? events : events.filter((event) => event.location === location);
			const eventsDisplayed = locationEvents.slice(0, eventCount);
			this.setState({ events: eventsDisplayed, locationSet: location, eventNo: eventCount });
		});
	};

	render() {
		return (
			<div className="App">
				<CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
				<p>
					<br />
				</p>
				Number of Events: <NumberOfEvents updateEvents={this.updateEvents} />
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default App;
