# **meetUp!**

<img src="https://res.cloudinary.com/ds9nzjduw/image/upload/v1658709494/CareeerFoundry%20Cuourse/README_Cover_Image_fm8bko.png">

A serverless, progressive web application (PWA) built with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.
<br />

> Live demo <a href="https://simon3073.github.io/meetUp/" target="_blank">here</a>

---

<br/>

## **Project Dependencies**

-   React CRA
-   React axios and async/await.
-   Javascript
-   CSS
-   Semantic UI
-   Google Calendar API and OAuth2 authentication
-   AWS Lambda
-   Jest, Cucumber and Puppeteer for Testing

<br/>

## **Technical Requirements**

-   Create an AWS serverless function to connect to the Google Calendar API using OAuth2 authentication
-   Unit, Integration, User Acceptance and End-To-End testing using Jest, Cucumber, Gherkin and Puppeteer
-   App monitoring with Atatus

<br/>

## **Installation**

1. Clone repo

```bash
git clone https://github.com/simon3073/meetUp.git
```

2. Edit homepage in package.json to connected github repo
3. Run app locally

```bash
npm run start
```

4. Deploy on GitHub Pages

```bash
npm run deploy
```

<br/>
<br/>

## **BDD (Behaviour Driven Development)**

### **FEATURE 1:** FILTER EVENTS BY CITY

As a **user**, I should be able to **see all the events in a city** so that **I can narrow down to events that I am interested in**

SCENARIO 1: _WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES:_

-   **Given** user hasn’t searched for any city
-   **When** the user opens the app
-   **Then** the user should see a list of all upcoming events

SCENARIO 2: _USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY:_

-   **Given** the main page is open
-   **When** user starts typing in the city textbox
-   **Then** the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: _USER CAN SELECT A CITY FROM THE SUGGESTED LIST:_

-   **Given** the user was typing “Berlin” in the city textbox, and the list of suggested cities is showing
-   **When** the user selects a city (e.g., “Berlin, Germany”) from the list
-   **Then** their city should be changed to that city (i.e., “Berlin, Germany”), and the user should receive a list of upcoming events in that city

<br/>

### **FEATURE 2:** SHOW/HIDE AN EVENTS DETAILS:

As a **user**, I should be able to **see more information about a specific event** so that **I can make an informed decision on if I wish to attend**

SCENARIO 1: _An event element is collapsed by default_

-   **Given** the main page is open
-   **When** the user has not made any selections
-   **Then** the user will not see any specific event details

SCENARIO 2: _User can expand an event to see its details_

-   **Given** a user wants to see more about an event
-   **When** the user selects/clicks the event
-   **Then** the event details will show

SCENARIO 3: _User can collapse an event to hide its details_

-   **Given** a user no longer wants to see the event OR decides to view another event
-   **When** the user selects/clicks the event OR selects/clicks another event
-   **Then** the event detail will hide

<br/>

### **FEATURE 3:** SPECIFY NUMBER OF EVENTS:

As a **user**, I should be able to **specify the amount of events I see at a time** so that **I can decide how many or few to view at once**

SCENARIO 1: _When user hasn’t specified a number, 32 is the default number._

-   **Given** the main page is open
-   **When** the user has not made any selections
-   **Then** there will be 32 events shown

SCENARIO 2: _User can change the number of events they want to see_

-   **Given** a user wants to see a specific number of events
-   **When** a user inputs a number into the app
-   **Then** that number of events will be shown

<br/>

### **FEATURE 4:** USE THE APP WHEN OFFLINE:

As a **user**, I should be able to **still view the app without an internet** so that **I can view previous data accessed**

SCENARIO 1: _Show cached data when there’s no internet connection._

-   **Given** the user has no internet connection
-   **When** they open the app
-   **Then** they will see data saved in the cache

SCENARIO 2: _Show error when user changes the settings (city, time range)_

-   **Given** the user has no internet connection
-   **When** the user navigates to a page
-   **Then** they will recieve an error notifying them of not having internet connection

<br/>

### **FEATURE 5:** DATA VISUALISATION

As a **user**, I should be able to **view a visual representation of events in a city** so that **quickly see the amount of events**

SCENARIO 1: _Show a chart with the number of upcoming events in each city_

>

-   **Given** the user wants to see events in a specific city
-   **When** the user enters the city into the app
-   **Then** the user will see a data visualisation of the number of events in the city

<br/>

## **Features**

-   Filter events by city
-   Expand/Hide event details
-   Specify number of events to show
-   Authorise using google account
    <br/>

<br><br><br>

[![Header](https://res.cloudinary.com/ds9nzjduw/image/upload/v1670822823/simonbertoli.com/github_profile_banner_kbblzy.png "Header")](https://simonbertoli.com/)

## 📇 Connect with me

<a href="https://codepen.io/simon3073" target="_blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="@simon3073" height="30" width="40" /></a>
<a href="https://linkedin.com/in/simon-bertoli-5a73893" target="_blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="simon-bertoli-5a73893" height="30" width="40" /></a>
</p>

