import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Charts from './Charts';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';

import WelcomeScreen from './WelcomeScreen';
import { Grid, Segment, Divider } from 'semantic-ui-react';
import './App.css';

class App extends Component {
    // set the details event index as a state from top component
    state = {
        showWelcomeScreen: undefined,
        events: [],
        locations: [],
        locationSet: 'All Cities',
        detailIndex: undefined,
        eventNo: 32,
        loadingValue: true,
    };

    async componentDidMount() {
        this.mounted = true;
        const accessToken = localStorage.getItem('access_token');
        const isTokenValid = (await checkToken(accessToken)).error ? false : true;
        console.log('🚀 ~ file: App.js ~ line 28 ~ App ~ componentDidMount ~ isTokenValid', isTokenValid);
        const searchParams = new URLSearchParams(window.location.search);
        const code = searchParams.get('code');
        console.log('🚀 ~ file: App.js ~ line 30 ~ App ~ componentDidMount ~ code', code);
        this.setState({ showWelcomeScreen: !(code || isTokenValid) });
        if ((code || isTokenValid) && this.mounted) {
            getEvents().then((events) => {
                if (this.mounted) {
                    this.setState({ events, locations: extractLocations(events) });
                    this.updateEvents();
                }
            });
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    updateEvents = (location, eventCount) => {
        this.setState({ loadingValue: true });
        location = location || this.state.locationSet;
        eventCount = eventCount || this.state.eventNo;
        getEvents().then((events) => {
            const locationEvents =
                location === 'All Cities' ? events : events.filter((event) => event.location === location);
            this.setState({
                events: locationEvents.slice(0, eventCount),
                locationSet: location,
                eventNo: eventCount,
                detailIndex: null, // reset the details panel on changing of location or event no to view
                loadingValue: false,
            });
        });
    };

    // data for bar chart
    getEventNoData = () => {
        const { locations, events } = this.state;
        const data = locations.map((location) => {
            const number = events.filter((event) => event.location === location).length;
            const city = location.split(', ').shift();
            return { city, number };
        });
        return data;
    };

    // data for pie chart
    getEventTypeData = () => {
        const { events } = this.state;
        const tech2find = ['React', 'jQuery', 'Javascript', 'Angular', 'Node.js'];
        const data = tech2find.map((tech) => {
            const number = events.filter((event) => event.summary.toLowerCase().includes(tech.toLowerCase())).length;
            return { name: tech, value: number };
        });
        return data;
    };

    render() {
        const { events, locations, locationSet, showWelcomeScreen, detailIndex, loadingValue } = this.state;
        // if (showWelcomeScreen === undefined) return <div className="App" />;
        if (loadingValue)
            return (
                <div className="loading-progress">
                    <div className="dots-flow" />
                    <span> Your events are on the way... please wait!</span>
                </div>
            );
        return (
            <div className="App">
                {showWelcomeScreen ? (
                    <WelcomeScreen showWelcomeScreen={showWelcomeScreen} getAccessToken={() => getAccessToken()} />
                ) : (
                    <>
                        <Grid className="grid-header" stackable columns={2} divided>
                            <div className="header-logo"></div>

                            <Grid.Row className="grid-row-header">
                                <Grid.Column>
                                    <Segment className="header-segment">
                                        <CitySearch
                                            locations={locations}
                                            currentLocation={locationSet}
                                            updateEvents={this.updateEvents}
                                        />
                                        <NumberOfEvents updateEvents={this.updateEvents} />
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Charts barData={this.getEventNoData()} pieData={this.getEventTypeData()} />
                        <Divider horizontal>
                            <span className="event-header">
                                {locationSet === 'All Cities' ? 'All Events' : `Events in ${locationSet}`}
                            </span>
                        </Divider>
                        <EventList
                            events={events}
                            detailIndex={detailIndex}
                            setDetailIndex={(e) => this.setState({ detailIndex: e })}
                        />
                    </>
                )}
            </div>
        );
    }
}

export default App;
