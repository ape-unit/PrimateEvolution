import React, { Component } from 'react';
import TopBar from './TopBar.js';
import GameBoard from './GameBoard.js';
import '../component-styles/MainApp.css';

class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          bananas: 0
        };

        this.addBananas = this.addBananas.bind(this);
      }

    addBananas(amount) {
        this.setState({
            bananas: this.state.bananas + amount
        });
    }

    render() {
        return (
            <div class="app-bg">
                <TopBar bananas={this.state.bananas}/>
                <div class="central-div">
                    <GameBoard bananas={this.state.bananas} addBananas={this.addBananas}/>
                </div>
            </div>
        )
    }
}

export default MainApp;