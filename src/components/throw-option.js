import React, { Component } from 'react';
import ThrowIcon from './throw-icon';

class ThrowOption extends Component {
    render() {
        return (
            <button value={this.props.value} onClick={this.props.handleThrow} className={'c-throw_option' + (this.props.isActive === 'true' ? ' c-throw_option--active' : '')}>
                <ThrowIcon value={this.props.value} />
            </button>
        );
    }
}

export default ThrowOption;
