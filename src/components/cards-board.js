import React, {Component} from "react";
import Card from "./card";
import './cards-board.css';

class CardsBoard extends Component {

    checkOpenCards = (cardName, callback) => {
        this.props.cards.forEach(card => {
            if (card.isOpen) {
                if (card.name === cardName) {
                    console.log(card.name)
                    callback()
                }
            }
        })
    }

    render () {
        const {cards, levelUp, changeOpenState} = this.props;
        
        return (
            <div className="cards-board">{
                cards.map((card,index) => <div key={index} className="card-cont">
                    <Card 
                        id={card.id}
                        name={card.name}
                        levelUp={levelUp}
                        check={this.checkOpenCards}
                        isOpen={card.isOpen}
                        changeOpenState={changeOpenState}
                    />
                </div>
                )
            }
            </div>
        )
    }
}

export default CardsBoard;