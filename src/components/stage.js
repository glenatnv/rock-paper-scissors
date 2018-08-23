import React, { Component } from 'react';
import ThrowOption from './throw-option';
import Bot from './bot';
import Result from './result';

class Stage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            playerThrow: null,
            botThrow: null,
            result: null
        };
    }

    handleClick(e) {
        var botThrow = this.botThrow();
        var playerThrow = e.currentTarget.value;

        this.setState({
            playerThrow: e.currentTarget.value,
            botThrow: botThrow
        });

        var winner = this.determineWinner(botThrow, playerThrow);

        if (winner === 'draw') {
            this.setState({ result: 'Draw' });
        } else if (winner === 'player') {
            this.setState({ result: 'You Win' });
        } else if (winner === 'bot') {
            this.setState({ result: 'You Lose' });
        }

        console.log('Bot: ' + botThrow, 'Player: ' + playerThrow, 'Winner: ' + winner);
    }

    botThrow() {
        var x = Math.random();

        if (x < 0.34) {
            x = 'rock';
        } else if (x <= 0.67) {
            x = 'paper';
        } else {
            x = 'scissors';
        }

        return x;
    }

    determineWinner(botThrow, playerThrow) {
        if (botThrow === playerThrow) {
            return 'draw';
        } else {
            if (botThrow === 'rock') {
                if (playerThrow === 'scissors') {
                    // rock wins
                    return 'bot';
                } else {
                    // paper wins
                    return 'player';
                }
            }
            if (botThrow === 'paper') {
                if (playerThrow === 'rock') {
                    // paper wins
                    return 'bot';
                } else {
                    // scissors wins
                    return 'player';
                }
            }
            if (botThrow === 'scissors') {
                if (playerThrow === 'rock') {
                    // rock wins
                    return 'player';
                } else {
                    // scissors wins
                    return 'bot';
                }
            }
        }
    }

    render() {
        return (
            <section className="c-stage">
                <div className="c-bot_throw">
                    <Bot botThrow={this.state.botThrow} />
                </div>
                <div className="c-result">
                    <Result value={this.state.result} />
                </div>
                <div className="c-throw_options">
                    <ThrowOption value="rock" handleThrow={e => this.handleClick(e)} isActive={this.state.playerThrow === 'rock' ? 'true' : 'false'} />
                    <ThrowOption value="paper" handleThrow={e => this.handleClick(e)} isActive={this.state.playerThrow === 'paper' ? 'true' : 'false'} />
                    <ThrowOption value="scissors" handleThrow={e => this.handleClick(e)} isActive={this.state.playerThrow === 'scissors' ? 'true' : 'false'} />
                </div>
            </section>
        );
    }
}

export default Stage;
