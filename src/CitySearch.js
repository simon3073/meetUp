import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import { InfoAlert, WarningAlert } from './Alert';

class CitySearch extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            suggestions: [],
            showSuggestions: false,
            infoText: '',
            warningText: this.setOfflineMessage(), // check offline status on load
        };
        this.setOfflineMessage = this.setOfflineMessage.bind(this);
    }

    // by default check if the app is offline - display message if so and leave blank otherwise
    setOfflineMessage = () => {
        return !navigator.onLine ? 'You are currently offline' : '';
    };

    // when user moves focus from the city input > remove the suggestions box
    handleOnBlur = () => {
        this.setState({
            showSuggestions: false,
            infoText: '',
            warningText: this.setOfflineMessage(),
        });
    };

    // on input entry > change suggestions offered and set the Alert helper accordingly
    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                suggestions,
                infoText: 'This city cannot be found. Please try again',
                warningText: '',
            });
        } else if (suggestions.length === 1 || value === '') {
            this.setState({
                query: value,
                suggestions,
                showSuggestions: true,
                infoText: '',
                warningText: this.setOfflineMessage(),
            });
        } else {
            this.setState({
                query: value,
                suggestions,
                showSuggestions: true,
                infoText: '',
                warningText: 'Continue typing to narrow down your city search',
            });
        }
    };

    // on clicking of a suggestions
    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false,
            infoText: '',
            warningText: this.setOfflineMessage(),
        });
        this.props.updateEvents(suggestion, null);
    };

    render() {
        return (
            <div className="CitySearch">
                <InfoAlert text={this.state.infoText} />
                <WarningAlert text={this.state.warningText} />
                <Input
                    type="text"
                    placeholder="Search for MeetUps in a city"
                    onBlur={this.handleOnBlur}
                    className="city"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
                <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
                    {this.state.suggestions.map((suggestion) => (
                        <li
                            key={suggestion}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                this.handleItemClicked(suggestion);
                            }}
                        >
                            {suggestion}
                        </li>
                    ))}
                    <li
                        key="all"
                        onMouseDown={(e) => {
                            e.preventDefault();
                            this.handleItemClicked('All Cities');
                        }}
                    >
                        <b>See all cities</b>
                    </li>
                </ul>
            </div>
        );
    }
}

CitySearch.propTypes = {
    locations: PropTypes.array.isRequired,
};

export default CitySearch;
