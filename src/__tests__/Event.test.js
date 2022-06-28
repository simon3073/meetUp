import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
	let eventData, EventWrapper;
	beforeAll(() => {
		eventData = {};
		EventWrapper = shallow(<Event event={mockData[0]} />);
	});

	test('Render event card', () => {
		expect(EventWrapper.find('.event-card')).toHaveLength(1);
	});
	test('Render event title', () => {
		expect(EventWrapper.find('.summary')).toHaveLength(1);
	});
	test('Render event date', () => {
		expect(EventWrapper.find('.date')).toHaveLength(1);
	});
	test('Render event location', () => {
		expect(EventWrapper.find('.location')).toHaveLength(1);
	});
	test('Render event details button', () => {
		expect(EventWrapper.find('.more-details')).toHaveLength(1);
	});
	test('Render event details element', () => {
		expect(EventWrapper.find('.event-details-hide')).toHaveLength(1);
	});
	test('Render event html link', () => {
		expect(EventWrapper.find('.event-link')).toHaveLength(1);
	});
	test('Render event description', () => {
		expect(EventWrapper.find('.event-desc')).toHaveLength(1);
	});
	test('Render event email', () => {
		expect(EventWrapper.find('.event-email')).toHaveLength(1);
	});

	test('event details collapsed on initial page load', () => {
		expect(EventWrapper.state('showDetails')).toBe(false);
	});

	test('event details shown on show event button click', () => {
		EventWrapper.setState({ showDetails: false });
		EventWrapper.find('.more-details').at(0).simulate('click');
		expect(EventWrapper.state('showDetails')).toBe(true);
	});

	test('event details hidden on show event button click', () => {
		EventWrapper.setState({ showDetails: true });
		EventWrapper.find('.more-details').at(0).simulate('click');
		expect(EventWrapper.state('showDetails')).toBe(false);
	});
});
