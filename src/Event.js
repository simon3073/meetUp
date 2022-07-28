import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

class Event extends Component {
    state = {
        showDetails: false,
    };

    // when ShowDetails is clicked, change text of button and send the eventID up to EventList component
    handleButtonClick = async () => {
        this.setState({ showDetails: !this.state.showDetails });
        this.props.showEventDetails(this.state.showDetails ? null : this.props.eventId);
    };

    // display Google Event correctly
    displayDate = (d) => {
        const date = new Date(d);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    // on update component check this event is not the current event set to show details
    // if prop boolean passes now and it is set - set the state to false
    componentDidUpdate() {
        if (!this.props.eventDetailsBool && this.state.showDetails) {
            this.setState({ showDetails: false });
        }
    }

    render() {
        const { event } = this.props;
        return (
            <>
                <div className="event">
                    <span className="summary">
                        <h2>{event.summary}</h2>
                    </span>
                    <p className="date">{this.displayDate(event.start.dateTime)}</p>
                    <p className="location">{event.location}</p>
                    <Button
                        inverted
                        color="yellow"
                        className="details-btn"
                        size="large"
                        onClick={this.handleButtonClick}
                    >
                        {this.state.showDetails ? 'Hide Details' : 'Show Details'}
                    </Button>
                </div>
            </>
        );
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    eventDetailsBool: PropTypes.bool.isRequired,
    eventId: PropTypes.number.isRequired,
};

export default Event;
