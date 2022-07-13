import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/feature/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
	test("When user hasn't specified a number, 32 is the default number.", ({ given, when, then }) => {
		let AppWrapper;
		given('the main page is open', () => {
			AppWrapper = mount(<App />);
		});

		when('the user has not made any selections', () => {});

		then('there will be 32 (3 with local test) events shown', () => {
			AppWrapper.update();
			expect(AppWrapper.find('.event')).toHaveLength(3);
		});
	});

	test('User can change the number of events they want to see', ({ given, when, then }) => {
		let AppWrapper;
		given('a user wants to see a specific number of events', async () => {
			AppWrapper = await mount(<App />);
		});

		when('a user inputs a number into the app', async () => {
			AppWrapper.update();
			jest.useFakeTimers();
			AppWrapper.find('.event-number').simulate('change', { target: { value: 1 } });
			jest.advanceTimersByTime(500);
		});

		then('that number of events will be shown', () => {
			AppWrapper.update();
			expect(AppWrapper.find('.event')).toHaveLength(1);
		});
	});
});
