import React from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import './App.css';

function App() {
	return (
		<div className="App">
			<NumberOfEvents />
			<CitySearch />
			<EventList />
		</div>
	);
}

export default App;
