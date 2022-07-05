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
		expect(EventWrapper.find('.event')).toHaveLength(1);
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
		expect(EventWrapper.find('.details-btn')).toHaveLength(1);
	});

	test('event details collapsed on initial page load', () => {
		expect(EventWrapper.state('showDetails')).toBe(false);
	});

	test('event details shown on show event button click', () => {
		EventWrapper.setState({ showDetails: false });
		EventWrapper.find('.details-btn').at(0).simulate('click');
		expect(EventWrapper.state('showDetails')).toBe(true);
		expect(EventWrapper.find('.event-details')).toHaveLength(1);
		expect(EventWrapper.find('.event-link')).toHaveLength(1);
		expect(EventWrapper.find('.event-desc')).toHaveLength(1);
		expect(EventWrapper.find('.event-email')).toHaveLength(1);
	});

	test('event details hidden on hide event button click', () => {
		EventWrapper.setState({ showDetails: true });
		EventWrapper.find('.details-btn').at(0).simulate('click');
		expect(EventWrapper.state('showDetails')).toBe(false);
		expect(EventWrapper.find('.event-details')).toHaveLength(0);
		expect(EventWrapper.find('.event-link')).toHaveLength(0);
		expect(EventWrapper.find('.event-desc')).toHaveLength(0);
		expect(EventWrapper.find('.event-email')).toHaveLength(0);
	});
});
