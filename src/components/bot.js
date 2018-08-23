import React, { Component } from 'react';
import ThrowIcon from './throw-icon';

class Bot extends Component {
    componentWillUpdate() {
        setTimeout(function() {
            console.log('timing...');
        }, 1000);
    }

    render() {
        return <ThrowIcon value={this.props.botThrow} className="c-bot_throw__icon" />;
    }
}

export default Bot;
