import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="c-footer">
                <span>Score</span>
                <span>
                    {this.props.totalWon} / {this.props.totalPlayed}
                </span>
                <span>{this.calculateWinPercentage(this.props)}%</span>
            </footer>
        );
    }

    calculateWinPercentage(props) {
        var totalWon = props.totalWon;
        var totalPlayed = props.totalPlayed;

        if (Number.parseInt(totalPlayed, 10) !== 0) {
            return (totalWon / totalPlayed) * 100;
        } else {
            return 0;
        }
    }
}

export default Footer;
