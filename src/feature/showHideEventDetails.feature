Feature:  SHOW/HIDE AN EVENTS DETAILS

Scenario: An event element is collapsed by default
Given the main page is open
When the user has not made any selections
Then the user will not see any specific event details

Scenario: User can expand an event to see its details
Given a user wants to see more about an event
When the user selects show details
Then the event details will show

Scenario: User can collapse an event to hide its details
Given a user no longer wants to see the event
When the user selects hide details
Then the event detail will hide
