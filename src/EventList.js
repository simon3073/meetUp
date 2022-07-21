import { React, useState } from 'react';
import Event from './Event';
import { Grid, Segment, Label, Icon } from 'semantic-ui-react';
import useWindowSize from './useWindowSize';

export default function EventList(props) {
    const { events } = props;
    const [detailsIndex, setdetailsIndex] = useState(null);
    const oneColumn = useWindowSize().width < 768;
    let addToNextRow = 'null';

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

    // function to calculate where to show the details
    const calculateDetailVisibility = (i) => {
        const eventDetails = events[detailsIndex]; // set event data to the state saved
        if (detailsIndex === i && oneColumn) {
            return showDetails(eventDetails); // if we are seeing only one column then show directly underneath
        }

        // otherwise calculate if this is the first event displayed (of two)
        // if it is delay its addition to the grid until the next loop
        const isLastInRow = i % 2 !== 0;
        if ((detailsIndex === i && isLastInRow) || i === addToNextRow) {
            return showDetails(eventDetails, addToNextRow !== 'null' ? 'arrow-el left' : 'arrow-el right');
        } else if (detailsIndex === i) {
            addToNextRow = i + 1;
        }
    };

    return (
        <Grid stackable columns={2} className="event-grid aaaa" padded="horizontally">
            {events.map((event, i) => (
                <>
                    {/* {test()} */}
                    <Grid.Column key={event.id}>
                        <Segment className="event-block">
                            <Event
                                key={event.id}
                                event={event}
                                eventDetailsBool={detailsIndex === i}
                                eventId={i}
                                showEventDetails={(e) => setdetailsIndex(e)}
                            />
                        </Segment>
                    </Grid.Column>
                    {
                        // show details of an event based on the state > which is passed up from the event when button is clicked
                        detailsIndex !== null ? calculateDetailVisibility(i) : ''
                    }
                </>
            ))}
        </Grid>
    );
}
