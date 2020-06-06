import React, { Component } from 'react';
import '../component-styles/BananaProducer.css';

class BananaProducer extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          price: props.price
        };

        this.changeToAffordable = this.changeToAffordable.bind(this);
        this.changeToExpensive = this.changeToExpensive.bind(this);
      }

    componentDidMount() {
        if (this.state.price <= this.props.bananas) {
            this.changeToAffordable();
        } else {
            this.changeToExpensive();
        }
    }

    changeToAffordable() {
        this.refs.upgradeBtn.classList.add("upgrade-affordable");
        this.refs.upgradeBtn.classList.remove("upgrade-too-expensive");
    }

    changeToExpensive() {
        this.refs.upgradeBtn.classList.remove("upgrade-affordable");
        this.refs.upgradeBtn.classList.add("upgrade-too-expensive");
    }

    render() {
        if (this.refs.upgradeBtn != null && this.state.price <= this.props.bananas) {
            this.changeToAffordable();
        } else if (this.refs.upgradeBtn != null) {
            this.changeToExpensive();
        }

        return (
            <div>
                <button>{this.state.price}</button>
                <button ref="upgradeBtn" class="upgrade-affordable"></button>
            </div>
        )
    }
}

export default BananaProducer;