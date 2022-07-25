import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let updateEvents, NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
    });

    test('render input field for event number', () => {
        expect(NumberOfEventsWrapper.find('.event-number')).toHaveLength(1);
    });

    test('render 32 events on load default', () => {
        expect(NumberOfEventsWrapper.state('eventsNumber')).toBe(32);
        expect(NumberOfEventsWrapper.find('.event-number').prop('value')).toBe(32);
    });

    test('display 5 events on change of input element', () => {
        NumberOfEventsWrapper.find('.event-number').simulate('change', { target: { value: 5 } });
        expect(NumberOfEventsWrapper.state('eventsNumber')).toBe(5);
    });

    test('display 10 events on change of input element', () => {
        NumberOfEventsWrapper.find('.event-number').simulate('change', { target: { value: 10 } });
        expect(NumberOfEventsWrapper.state('eventsNumber')).toBe(10);
    });
});
