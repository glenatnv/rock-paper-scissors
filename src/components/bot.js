import React, { Component } from 'react';
import ThrowIcon from './throw-icon';

class Bot extends Component {
    render() {
        return (
            <div className={'c-bot_throw__wrapper ' + (this.props.visible ? ' c-bot_throw__wrapper--visible' : '')}>
                <ThrowIcon value={this.props.botThrow} className="c-bot_throw__icon" />
            </div>
        );
    }
}

export default Bot;
