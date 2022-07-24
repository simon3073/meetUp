import React, { Component } from 'react';

// Alert component to show help and directions when interacting with the City and Number Inputs
export default class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
        };
    };

    render() {
        return (
            <div className="Alert">
                {this.props.text !== '' ? <p style={this.getStyle()}>{this.props.text}</p> : ''}
            </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#5caf92';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#ff0081';
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'orange';
    }

    getStyle = () => {
        return {
            color: this.color,
            fontStyle: 'italic',
        };
    };
}

export { InfoAlert, ErrorAlert, WarningAlert };
