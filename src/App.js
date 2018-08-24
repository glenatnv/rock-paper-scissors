import React, { Component } from 'react';
import Header from './components/header';
import Stage from './components/stage';
import Footer from './components/footer';

class App extends Component {
    constructor(props) {
        super(props);

        var totalPlayed = localStorage.getItem('totalPlayed') === null ? 0 : localStorage.getItem('totalPlayed');
        var totalWon = localStorage.getItem('totalWon') === null ? 0 : localStorage.getItem('totalWon');
        var totalDrawn = localStorage.getItem('totalDrawn') === null ? 0 : localStorage.getItem('totalDrawn');

        this.state = {
            totalPlayed: totalPlayed,
            totalWon: totalWon,
            totalDrawn: totalDrawn
        };
    }

    /**
     * handleGameComplete
     * Check the result of the game and update the state and local storage to match
     * @param {*} winner
     */
    handleGameComplete(winner) {
        if (winner === 'player') {
            this.setState({
                totalWon: parseInt(this.state.totalWon, 10) + 1
            });
            localStorage.setItem('totalWon', this.state.totalWon);
        }
        if (winner === 'draw') {
            this.setState({
                totalDrawn: parseInt(this.state.totalDrawn, 10) + 1
            });
            localStorage.setItem('totalDrawn', this.state.totalDrawn);
        }
        this.setState({
            totalPlayed: parseInt(this.state.totalPlayed, 10) + 1
        });
        localStorage.setItem('totalPlayed', this.state.totalPlayed);
    }

    render() {
        return (
            <div className="o-layout">
                <Header />
                <Stage {...this.state} onGameComplete={winner => this.handleGameComplete(winner)} />
                <Footer totalPlayed={this.state.totalPlayed} totalWon={this.state.totalWon} totalDrawn={this.state.totalDrawn} />
            </div>
        );
    }
}

export default App;
