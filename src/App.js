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
		locations: []
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

	updateEvents = (location) => {
		getEvents().then((events) => {
			const locationEvents = location === 'All Cities' ? events : events.filter((event) => event.location === location);
			this.setState({ events: locationEvents });
		});
	};

	render() {
		return (
			<div className="App">
				<CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
				<p>
					<br />
				</p>
				Number of Events: <NumberOfEvents />
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default App;
