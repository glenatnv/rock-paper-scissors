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
            botThrowVisible: false,
            result: null
        };
    }

    handleClick(e) {
        var botThrow = this.botThrow();
        var playerThrow = e.currentTarget.value;
        var that = this;

        this.setState({
            result: '',
            playerThrow: e.currentTarget.value,
            botThrowVisible: false
        });

        setTimeout(function() {
            var winner = that.determineWinner(botThrow, playerThrow);

            that.setState({
                botThrow: botThrow,
                botThrowVisible: true
            });

            that.props.onGameComplete(winner);

            setTimeout(function() {
                if (winner === 'draw') {
                    that.setState({ result: 'Draw' });
                } else if (winner === 'player') {
                    that.setState({ result: 'You Win' });
                } else if (winner === 'bot') {
                    that.setState({ result: 'You Lose' });
                }
            }, 600);
        }, 300);
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
                    <Bot botThrow={this.state.botThrow} visible={this.state.botThrowVisible} />
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
