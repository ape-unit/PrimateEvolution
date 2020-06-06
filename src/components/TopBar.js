import React, { Component } from 'react';
import BananaIcon from '../images/banana.png'
import '../component-styles/TopBar.css'

class TopBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };
      }

    componentWillReceiveProps() {
        console.log(this.props.bananas);
    }

    render() {
        return (
            <div class="top-bg">
                <div class="top-content">
                    <img class="banana-icon" src={BananaIcon} alt="bananas: " />
                    <h1 class="banana-count-text">{this.props.bananas}</h1>
                </div>
            </div> 
        )
    }
}

export default TopBar;