import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Event from './Event';
import { Grid, Segment, Label, Icon } from 'semantic-ui-react';
import useWindowSize from './useWindowSize';

export default function EventList(props) {
    const { events, detailIndex } = props;
    const oneColumn = useWindowSize().width < 768; // set variable onResize using the useWindowSize hook

    // function to display event detail call when a Show Details button has been clicked
    const showDetails = (eventToShow, arrowPos = 'arrow-el') => {
        return (
            <Grid.Column width={16} key={eventToShow.id} className="event-details-block">
                <div className={arrowPos}>
                    <div className="arrow"></div>
                </div>
                <Segment className="segment-block-details">
                    <div className="event-details">
                        <a className="event-link" href="{eventToShow.htmlLink}">
                            Google Calendar Event
                        </a>
                        <p className="event-desc">{eventToShow.description}</p>
                        <Label color="red" className="event-email" size="big">
                            <Icon name="mail" />
                            <a href="mailto:{eventToShow.organizer.email}">Email for more info</a>
                        </Label>
                    </div>
                </Segment>
            </Grid.Column>
        );
    };

    let addToNextRow = 'null';
    // function to calculate where to show the details
    const calculateDetailVisibility = (i) => {
        const eventDetails = events[detailIndex]; // set event data to the state saved
        if (detailIndex === i && oneColumn) {
            return showDetails(eventDetails); // if we are seeing only one column then show directly underneath
        } else if (events.length === 1) {
            return showDetails(eventDetails, 'arrow-el left'); // if there is only one event show directly underneath
        }

        // otherwise calculate if this is the first event displayed (of two)
        // if it is delay its addition to the grid until the next loop
        const isLastInRow = i % 2 !== 0; //
        if ((detailIndex === i && isLastInRow) || i === addToNextRow) {
            return showDetails(eventDetails, addToNextRow !== 'null' ? 'arrow-el left' : 'arrow-el right');
        } else if (detailIndex === i) {
            addToNextRow = i + 1;
        }
    };

    return (
        <Grid stackable columns={2} className="event-grid" padded="horizontally">
            {events ? (
                events.map((event, i) => (
                    <Fragment key={event.id}>
                        <Grid.Column>
                            <Segment className="event-block">
                                <Event
                                    event={event}
                                    eventDetailsBool={detailIndex === i}
                                    eventId={i}
                                    showEventDetails={(e) => props.setDetailIndex(e)}
                                />
                            </Segment>
                        </Grid.Column>
                        {
                            // show details of an event based on the state > and detailIndex set
                            detailIndex !== null ? calculateDetailVisibility(i) : ''
                        }
                    </Fragment>
                ))
            ) : (
                <div className="loader">LOADING</div>
            )}
        </Grid>
    );
}

EventList.propTypes = {
    events: PropTypes.array.isRequired,
    detailIndex: PropTypes.number,
};
