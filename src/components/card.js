import React, {Component} from "react";
import './card.css';

class Card extends Component {

    rotate = (isOpen) => {
        return {transform: isOpen?'rotateY(180deg)': null};
    }

    render () {
        const {name, id, flipCard, isOpen} = this.props;

        return (
            <div className="card" style={this.rotate(isOpen)} onClick={flipCard.bind(this,id,name,isOpen)}>
                <div className="card-front">?</div>
                <div className="card-back">{name}</div>
            </div>
        )
    }
}

export default Card;