import React, { Component } from 'react';

class Result extends Component {
    message() {
        if (this.props.value === null) {
            return <span className="c-result  c-result--empty">Choose a throw to start</span>;
        } else {
            return <span className="c-result">{this.props.value}</span>;
        }
    }

    render() {
        return <div>{this.message()}</div>;
    }
}

export default Result;
