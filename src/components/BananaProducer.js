import React, { Component } from 'react';
import '../component-styles/BananaProducer.css';

class BananaProducer extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          price: props.price,
          quantity: 0
        };

        // methods
        this.changeToAffordable = this.changeToAffordable.bind(this);
        this.changeToExpensive = this.changeToExpensive.bind(this);
        this.purchaseProducer = this.purchaseProducer.bind(this);
        this.addBPS = this.addBPS.bind(this);

        this.bpsInterval = undefined;

        // variables
        this.value = this.props.value;
      }

    componentDidMount() {
        this.bpsInterval = setInterval(this.addBPS, 100);
    }

    // these two methods are just done to update the style on initial loading
    changeToAffordable() {
        this.refs.upgradeBtn.classList.add("upgrade-affordable");
        this.refs.upgradeBtn.classList.remove("upgrade-too-expensive");
    }

    changeToExpensive() {
        this.refs.upgradeBtn.classList.remove("upgrade-affordable");
        this.refs.upgradeBtn.classList.add("upgrade-too-expensive");
    }

    // Called when someone attempts to purchase one of this item
    purchaseProducer() {
        if (Math.floor(this.props.bananas) >= Math.floor(this.state.price)) {
            this.props.addBananas(-1 * Math.floor(this.state.price));
            this.setState({
                quantity: this.state.quantity + 1,
                price: this.state.price * 1.2
            })
        }
    }

    // this is where we add the appropriate bananas per second (it's executed on an interval)
    /*
        IMPORTANT: I'M GOING TO MOVE THIS TO  MainApp.js SO I CAN ALSO KEEP TRACK OF TOTAL BANANAS PER SECOND
    */
    addBPS() {
        // console.log(this.state)
        // total added = number of this producer purchased * value of producer
        var amountToAdd = this.state.quantity * this.value;
        amountToAdd /= 10; // do this because I execute this 10 times a second
        this.props.addBananas(amountToAdd);
        console.log(amountToAdd)
    }

    render() {
        if (this.refs.upgradeBtn != null && this.state.price <= this.props.bananas) {
            this.changeToAffordable();
        } else if (this.refs.upgradeBtn != null) {
            this.changeToExpensive();
        }

        return (
            <div class="producer-main-div">
                {/* This is the left side image with the label for how many we have on top of it */}
                <div class="producer-left-side">
                    <div class="vertical-centering">
                        <img class="producer-icon" src={this.props.icon} alt="',:)"/>
                        <div class="producer-count-div">
                            <h1 class="producer-count-text comic-sans">{"x " + this.state.quantity}</h1>
                        </div>
                    </div>
                </div>
                <div class="producer-right-side">
                    <div class="vertical-centering">
                        <h1 class="producer-name-text comic-sans">{this.props.name}</h1>
                        <div class="producer-purchase-div">
                            <button ref="upgradeBtn" class="upgrade-too-expensive" onClick={this.purchaseProducer}></button>
                            <h1 class="producer-price-text comic-sans">{Math.floor(this.state.price) + " b"}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BananaProducer;