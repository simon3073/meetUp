import { React } from 'react';
import Event from './Event';
import { Grid, Segment, Label, Icon } from 'semantic-ui-react';
import useWindowSize from './useWindowSize';

export default function EventList(props) {
    const { events } = props;
    const oneColumn = useWindowSize().width < 768;

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
        const eventDetails = events[props.detailIndex]; // set event data to the state saved
        if (props.detailIndex === i && oneColumn) {
            return showDetails(eventDetails); // if we are seeing only one column then show directly underneath
        } else if (events.length === 1) {
            return showDetails(eventDetails, 'arrow-el left'); // if there is only one event show directly underneath
        }

        // otherwise calculate if this is the first event displayed (of two)
        // if it is delay its addition to the grid until the next loop
        const isLastInRow = i % 2 !== 0; //
        if ((props.detailIndex === i && isLastInRow) || i === addToNextRow) {
            return showDetails(eventDetails, addToNextRow !== 'null' ? 'arrow-el left' : 'arrow-el right');
        } else if (props.detailIndex === i) {
            addToNextRow = i + 1;
        }
    };

    return (
        <Grid stackable columns={2} className="event-grid aaaa" padded="horizontally">
            {events.map((event, i) => (
                <>
                    <Grid.Column key={event.id}>
                        <Segment className="event-block">
                            <Event
                                key={event.id}
                                event={event}
                                eventDetailsBool={props.detailIndex === i}
                                eventId={i}
                                showEventDetails={(e) => props.setDetailIndex(e)}
                            />
                        </Segment>
                    </Grid.Column>
                    {
                        // show details of an event based on the state > and detailIndex set
                        props.detailIndex !== null ? calculateDetailVisibility(i) : ''
                    }
                </>
            ))}
        </Grid>
    );
}
