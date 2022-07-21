import React, { Component } from 'react'
import EventList from './EventList'
import CitySearch from './CitySearch'
import NumberOfEvents from './NumberOfEvents'
import { getEvents, extractLocations, checkToken, getAccessToken } from './api'
import WelcomeScreen from './WelcomeScreen'
import { Grid, Segment, Divider } from 'semantic-ui-react'
import './App.css'
import './nprogress.css'

class App extends Component {
  state = {
    showWelcomeScreen: undefined,
    events: [],
    locations: [],
    locationSet: 'All Cities',
    eventNo: 32,
  }

  async componentDidMount() {
    this.mounted = true
    // const accessToken = localStorage.getItem('access_token');
    // const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    // const searchParams = new URLSearchParams(window.location.search);
    // const code = searchParams.get('code');
    // this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    // if ((code || isTokenValid) && this.mounted) {
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) })
        this.updateEvents()
      }
    })
    // }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  updateEvents = (location, eventCount) => {
    location = location || this.state.locationSet
    eventCount = eventCount || this.state.eventNo
    getEvents().then((events) => {
      const locationEvents =
        location === 'All Cities'
          ? events
          : events.filter((event) => event.location === location)
      this.setState({
        events: locationEvents.slice(0, eventCount),
        locationSet: location,
        eventNo: eventCount,
      })
    })
  }

  render() {
    const { events, locations, locationSet, showWelcomeScreen } = this.state
    // if (showWelcomeScreen === undefined) return <div className="App" />

    return (
      <div className="App">
        {/* {showWelcomeScreen ? (
          <WelcomeScreen
            showWelcomeScreen={showWelcomeScreen}
            getAccessToken={() => getAccessToken()}
          />
        ) : ( */}
        <>
          <Grid className="grid-header" stackable columns={2} divided>
            <div className="header-logo"></div>

            <Grid.Row className="grid-row-header">
              <Grid.Column>
                <Segment className="header-segment">
                  <CitySearch
                    locations={locations}
                    updateEvents={this.updateEvents}
                  />
                  <NumberOfEvents updateEvents={this.updateEvents} />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider horizontal>
            <span className="event-header">
              {locationSet === 'All Cities'
                ? 'All Events'
                : `Events in ${locationSet}`}
            </span>
          </Divider>
          <EventList events={events} />
        </>
        {/* )} */}
      </div>
    )
  }
}

export default App
