import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => {
	let AppWrapper;
	beforeAll(() => {
		AppWrapper = shallow(<App />);
	});

	test('render Number of', () => {
		expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
	});

	test('render list of events', () => {
		expect(AppWrapper.find(EventList)).toHaveLength(1);
	});

	test('render City Search', () => {
		expect(AppWrapper.find(CitySearch)).toHaveLength(1);
	});
});

describe('<App /> integration', () => {
	test('App passes "events" state as a prop to EventList', () => {
		const AppWrapper = mount(<App />);
		const AppEventsState = AppWrapper.state('events');
		expect(AppEventsState).not.toEqual(undefined);
		expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
		AppWrapper.unmount();
	});

	// CitySearch tests

	test('App passes "locations" state as a prop to CitySearch', () => {
		const AppWrapper = mount(<App />);
		const AppLocations = AppWrapper.state('locations');
		expect(AppLocations).not.toEqual(undefined);
		expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocations);
		AppWrapper.unmount();
	});

	test('Get a list of events matching the city selected by the user', async () => {
		const AppWrapper = mount(<App />);
		const CitySearchWrapper = AppWrapper.find(CitySearch);
		const locations = extractLocations(mockData);
		CitySearchWrapper.setState({ suggestions: locations });
		const suggestions = CitySearchWrapper.state('suggestions');
		const selectedIndex = Math.floor(Math.random() * suggestions.length);
		const selectedCity = suggestions[selectedIndex];
		await CitySearchWrapper.instance().handleItemClicked(selectedCity);
		const allEvents = await getEvents();
		const eventsToShow = allEvents.filter((event) => event.location === selectedCity);
		expect(AppWrapper.state('events')).toEqual(eventsToShow);
		AppWrapper.unmount();
	});

	test('get a list of cities when user selects "See all Cities"', async () => {
		const AppWrapper = mount(<App />);
		const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
		await suggestionItems.at(suggestionItems.length - 1).simulate('click');
		const allEvents = await getEvents();
		expect(AppWrapper.state('events')).toEqual(allEvents);
		AppWrapper.unmount();
	});

	// Number of events tests
	test('change state of "eventsNo" to 5 events when number in <NumberOfEvents /> is set to 5', async () => {
		const AppWrapper = mount(<App />);
		const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
		await NumberOfEventsWrapper.find('.event-number').simulate('change', { target: { value: 5 } });
		expect(AppWrapper.state('eventNo')).toBe(5);
	});

	test('display 5 events when "eventsNo" state is changed to 5', async () => {
		const AppWrapper = mount(<App />);
		AppWrapper.setState({ eventNo: 5 });
		const allEvents = await getEvents();
		const eventsToShow = allEvents.slice(0, 5);
		expect(AppWrapper.state('events').length).toBe(eventsToShow.length);
	});
});
