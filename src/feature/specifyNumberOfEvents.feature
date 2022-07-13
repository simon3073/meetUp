Feature: SPECIFY NUMBER OF EVENTS:

Scenario: When user hasn't specified a number, 32 is the default number.
Given the main page is open
When the user has not made any selections
Then there will be 32 (3 with local test) events shown

Scenario: User can change the number of events they want to see
Given a user wants to see a specific number of events
When a user inputs a number into the app
Then that number of events will be shown