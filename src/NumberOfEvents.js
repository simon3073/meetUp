import React, { Component } from 'react';

import { debounce } from 'lodash';
import { Segment } from 'semantic-ui-react';
import { ErrorAlert } from './Alert';

export default class NumberOfEvents extends Component {
    constructor() {
        super();
        this.state = {
            eventsNumber: 32,
            errorText: '',
        };
        this.updateAppState = debounce(this.updateAppState.bind(this), 500);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    updateAppState = (value) => {
        this.props.updateEvents(null, value);
    };

    handleOnBlur = () => {
        this.setState({
            errorText: '',
        });
    };

    handleChangeInput = ({ target }) => {
        if (target.value > 32 || target.value < 1) {
            this.setState({
                errorText: 'Please enter a number between 1 and 32',
            });
        } else {
            this.setState({
                eventsNumber: target.value,
                errorText: '',
            });
            this.updateAppState(target.value);
        }
    };

    render() {
        return (
            <>
                <Segment className="header-segment event-number-input">
                    Number of Events
                    <br />
                    (select a number between 1-32)
                    <p />
                    <input
                        type="number"
                        className="event-number"
                        value={this.state.eventsNumber}
                        onBlur={this.handleOnBlur}
                        onChange={this.handleChangeInput}
                    />
                    <ErrorAlert text={this.state.errorText} />
                </Segment>
            </>
        );
    }
}
