import React, { Component } from 'react';
import ThrowIcon from './throw-icon';

class Header extends Component {
    render() {
        return (
            <header className="c-header">
                <a className="c-header__logo" style={{ marginRight: '10px' }}>
                    <ThrowIcon value="rock" />
                </a>
                <span style={{ marginRight: 'auto' }}>R•P•S</span>
                {/*<a className="c-header__account">Account</a>*/}
            </header>
        );
    }
}

export default Header;
