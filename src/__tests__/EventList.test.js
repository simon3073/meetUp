import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
    test('render correct number of events', () => {
        const EventListWrapper = shallow(<EventList events={mockData} />);
        expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    });

    test('event details shown on show event component button click', () => {
        const EventListWrapper = shallow(<EventList events={mockData} detailIndex={1} />);
        expect(EventListWrapper.find('.event-details-block')).toHaveLength(1);
    });

    test('event details hidden on show event component button click', () => {
        const EventListWrapper = shallow(<EventList events={mockData} detailIndex={undefined} />);
        expect(EventListWrapper.find('.event-details-block')).toHaveLength(0);
    });
});
