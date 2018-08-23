import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="c-header">
                <a className="c-header__logo">Logo</a>
                <a className="c-header__account">Account</a>
            </header>
        );
    }
}

export default Header;
