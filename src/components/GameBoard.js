import React, { Component } from 'react';
import BananaProducer from './BananaProducer.js';
import '../component-styles/GameBoard.css'

class GameBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          bananasPerClick: 1
        };

        this.increaseBananasPerClick = this.increaseBananasPerClick.bind(this);
        this.canAffordPurchase = this.canAffordPurchase.bind(this);
      }

    // this function increases how many bananas you get per click
    increaseBananasPerClick(amount, cost) {
        if (this.canAffordPurchase(cost)) {
            // go ahead and make the purchase
            this.props.addBananas(-1 * cost);
            // update bananas per click
            this.setState({
                bananasPerClick: this.state.bananasPerClick + amount
            });
        }
    }

    // this function checks if you can afford a purchase
    canAffordPurchase(cost) {
        return cost <= this.props.bananas;
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.addBananas(this.state.bananasPerClick)}>Pick Banana</button>
                {/* This is for testing purposes, we can make a component for a purchaseable item that includes
                    cost for the upgrade (which icreases as you buy more), and what it does to improve your progress */}
                <button onClick={() => this.increaseBananasPerClick(1,10)}>Bigger Bunches (cost: 10 bananas) +1 banana per click</button>
                <h1>{"Bananas per click: " + this.state.bananasPerClick}</h1>
                <BananaProducer price={10} bananas={this.props.bananas}/>
            </div> 
        )
    }
}

export default GameBoard;