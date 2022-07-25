import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/feature/showHideEventDetails.feature');
class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

defineFeature(feature, (test) => {
    window.ResizeObserver = ResizeObserver;
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper;
        given('the main page is open', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user has not made any selections', () => {});

        then('the user will not see any specific event details', () => {
            expect(AppWrapper.find('.event-details-block').at(0)).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper;
        given('a user wants to see more about an event', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user selects show details', () => {
            AppWrapper.update();
            AppWrapper.find('.details-btn').at(0).simulate('click');
        });

        then('the event details will show', () => {
            expect(AppWrapper.find('.event-details-block').at(0)).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let AppWrapper;
        given('a user no longer wants to see the event', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user selects hide details', () => {
            AppWrapper.update();
            AppWrapper.find('.details-btn').at(0).simulate('click');
            AppWrapper.update();
            AppWrapper.find('.details-btn').at(0).simulate('click');
        });

        then('the event detail will hide', () => {
            expect(AppWrapper.find('.event-details-block').at(0)).toHaveLength(0);
        });
    });
});
