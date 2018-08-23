import React, { Component } from 'react';
import Header from './components/header';
import Stage from './components/stage';
import Footer from './components/footer';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPlayed: 0,
            totalWon: 0,
            totalDrawn: 0
        };
    }

    handleGameComplete() {
        this.setState({
            totalPlayed: this.state.totalPlayed + 1
        });
    }

    render() {
        return (
            <div className="o-layout">
                <Header />
                <Stage {...this.state} onGameComplete={() => this.handleGameComplete} />
                <Footer totalPlayed={this.state.totalPlayed} totalWon={this.state.totalWon} totalDrawn={this.state.totalDrawn} />
            </div>
        );
    }
}

export default App;
