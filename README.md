# meetUp

A serverless, progressive web application (PWA) built with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.
<br />

_Developer: Simon Bertoli_

---

<br/>

## User Stories

### **FEATURE 1:** FILTER EVENTS BY CITY

As a **user**, I should be able to **see all the events in a city** so that **I can narrow down to events that I am interested in**

SCENARIO 1: _WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES:_

- **Given** user hasn’t searched for any city
- **When** the user opens the app
- **Then** the user should see a list of all upcoming events

SCENARIO 2: _USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY:_

- **Given** the main page is open
- **When** user starts typing in the city textbox
- **Then** the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: _USER CAN SELECT A CITY FROM THE SUGGESTED LIST:_

- **Given** the user was typing “Berlin” in the city textbox, and the list of suggested cities is showing
- **When** the user selects a city (e.g., “Berlin, Germany”) from the list
- **Then** their city should be changed to that city (i.e., “Berlin, Germany”), and the user should receive a list of upcoming events in that city

<br/>

### **FEATURE 2:** SHOW/HIDE AN EVENTS DETAILS:

As a **user**, I should be able to **see more information about a specific event** so that **I can make an informed decision on if I wish to attend**

SCENARIO 1: _An event element is collapsed by default_

- **Given** the main page is open
- **When** the user has not made any selections
- **Then** the user will not see any specific event details

SCENARIO 2: _User can expand an event to see its details_

- **Given** a user wants to see more about an event
- **When** the user selects/clicks the event
- **Then** the event details will show

SCENARIO 3: _User can collapse an event to hide its details_

- **Given** a user no longer wants to see the event OR decides to view another event
- **When** the user selects/clicks the event OR selects/clicks another event
- **Then** the event detail will hide

<br/>

### **FEATURE 3:** SPECIFY NUMBER OF EVENTS:

As a **user**, I should be able to **specify the amount of events I see at a time** so that **I can decide how many or few to view at once**

SCENARIO 1: _When user hasn’t specified a number, 32 is the default number._

- **Given** the main page is open
- **When** the user has not made any selections
- **Then** there will be 32 events shown

SCENARIO 2: _User can change the number of events they want to see_

- **Given** a user wants to see a specific number of events
- **When** a user inputs a number into the app
- **Then** that number of events will be shown

<br/>

### **FEATURE 4:** USE THE APP WHEN OFFLINE:

As a **user**, I should be able to **still view the app without an internet** so that **I can view previous data accessed**

SCENARIO 1: _Show cached data when there’s no internet connection._

- **Given** the user has no internet connection
- **When** they open the app
- **Then** they will see data saved in the cache

SCENARIO 2: _Show error when user changes the settings (city, time range)_

- **Given** the user has no internet connection
- **When** the user navigates to a page
- **Then** they will recieve an error notifying them of not having internet connection

<br/>

### **FEATURE 5:** DATA VISUALISATION

As a **user**, I should be able to **view a visual representation of events in a city** so that **quickly see the amount of events**

SCENARIO 1: _Show a chart with the number of upcoming events in each city_

>

- **Given** the user wants to see events in a specific city
- **When** the user enters the city into the app
- **Then** the user will see a data visualisation of the number of events in the city

<br/>

---

<br/>
<h2 align="left"><i>Who am I?</i></h2>
<h3 align="left">I'm Simon Bertoli 👋 - an Old and New developer from Melbourne</h3>

- 🔭 I’m currently working on **my Full-Stack Web Development Program at Career Foundry**

- 🌱 I’m currently learning **React, Git, MongoDB**

- 👨‍💻 All of my projects are currently available at my <a href="https://github.com/simon3073" target="_blank">Github Homepage</a>, at <aand href="http://simonbertoli.com" target="_blank">simonbertoli.com</aand at <a href="https://codepen.io/simon3073" target="_blank">CodePen</a>

- 📫 How to reach me **simonbertoli@yahoo.com.au**

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://codepen.io/simon3073" target="_blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="@simon3073" height="30" width="40" /></a>
<a href="https://linkedin.com/in/simon-bertoli-5a73893" target="_blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="simon-bertoli-5a73893" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"<a href="https://getbootstrap.com" target="_blank" rel="noreferrer"<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/</a<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/</a<a href="https://git-scm.com/" target="_blank" rel="noreferrer"<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/</a<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/</a<a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"<img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40"/</a<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/</a<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/</a<a href="https://nodejs.org" target="_blank" rel="noreferrer"<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/</a<a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/</a<a href="https://www.php.net" target="_blank" rel="noreferrer"<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/</a<a href="https://reactjs.org/" target="_blank" rel="noreferrer"<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/</a<a href="https://sass-lang.com" target="_blank" rel="noreferrer"<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/</a<a href="https://www.adobe.com/products/xd.html" target="_blank" rel="noreferrer"<img src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" alt="xd" width="40" height="40"/</a<a href="https://zapier.com" target="_blank" rel="noreferrer"<img src="https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" alt="zapier" width="40" height="40"/</a</p>
