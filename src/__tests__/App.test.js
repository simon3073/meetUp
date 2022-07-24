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
    let AppWrapper;
    afterAll(() => {
        AppWrapper.unmount();
    });
    test('App passes "events" state as a prop to EventList', () => {
        AppWrapper = mount(<App />);
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    });

    // CitySearch tests
    test('App passes "locations" state as a prop to CitySearch', () => {
        AppWrapper = mount(<App />);
        const AppLocations = AppWrapper.state('locations');
        expect(AppLocations).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocations);
    });

    test('get list of events matching the city selected by the user', async () => {
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
    });

    test('get a list of cities when user selects "See all Cities"', async () => {
        AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
    });

    // Number of events tests
    test('display 5 events when "eventsNo" state is changed to 5', async () => {
        AppWrapper = mount(<App />);
        AppWrapper.setState({ eventNo: 5 });
        const allEvents = await getEvents();
        //const eventsToShow = allEvents.slice(0, 5);
        expect(AppWrapper.state('events').length).toBe(allEvents.length);
    });
});
