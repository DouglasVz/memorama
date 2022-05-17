import React, {Component} from "react";
import './card.css';

class Card extends Component {

    state = {isOpen: this.props.isOpen}

    rotate = () => {

        return {transform: this.state.isOpen?'rotateY(180deg)': null};
    }

    flipCard = (selectedCardId,name) => {
        if (!this.state.isOpen) {
            this.setState({isOpen:!this.state.isOpen});
            this.props.changeOpenState(true, selectedCardId);
            let timer = setTimeout(() => {
                this.setState({isOpen: false});
                this.props.changeOpenState(false, selectedCardId);
            },5000);

            this.props.check(name, () => {
                clearTimeout(timer);
            })
        }
        

        
            
    }

    render () {
        const {name, id} = this.props;

        return (
            <div className="card" style={this.rotate()} onClick={this.flipCard.bind(this,id,name)}>
                <div className="card-front">?</div>
                <div className="card-back">{name}</div>
            </div>
        )
    }
}

export default Card;