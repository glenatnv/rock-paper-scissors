import React, { Component } from 'react';
import IconRock from '../images/rock.svg';
import IconPaper from '../images/paper.svg';
import IconScissors from '../images/scissors.svg';

class ThrowIcon extends Component {
    specifyImage() {
        if (this.props.value === 'rock') {
            return IconRock;
        }
        if (this.props.value === 'paper') {
            return IconPaper;
        }
        if (this.props.value === 'scissors') {
            return IconScissors;
        }
    }

    render() {
        return <img src={this.specifyImage()} alt={this.props.value} className={this.props.className} />;
    }
}

export default ThrowIcon;
