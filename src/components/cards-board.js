import React, {Component} from "react";
import Card from "./card";
import './cards-board.css';

class CardsBoard extends Component {

    state = {
        toCompare: [], // [{id: "",name: "", timerId: "" }]
        opened: 0
    }

    checkOpenCards = () => {
        //Compare both open cards
        if ((this.state.toCompare[0].name !== this.state.toCompare[1].name)) {
            setTimeout(() => {
                this.state.toCompare.forEach(card => {
                    this.props.changeOpenState(false, card.id);
                })
                
                this.setState({toCompare: [], opened: this.state.opened - 2});
                
            },2000)
            return;
        }
        this.setState({toCompare: []});
    }

    flipCard = (selectedCardId,name,isOpen) => {
        if(!this.props.run)return
        if (isOpen) return;
        if (this.state.toCompare.length < 2) {
            this.props.changeOpenState(true, selectedCardId);
            
            this.setState(
                {
                    toCompare: [...this.state.toCompare, {id:selectedCardId, name: name}],
                    opened: this.state.opened + 1
                }, 
                () => {
                    
                    if (this.state.toCompare.length === 2) {
                        this.checkOpenCards();  
                    }
                }
            );
        }
    }

    render () {
        const {cards, levelUp, changeOpenState, showCards} = this.props;
        return (
            <div className="cards-board">{
                cards.map((card,index) => <div key={index} className="card-cont">
                    <Card 
                        id={card.id}
                        name={card.name}
                        levelUp={levelUp}
                        check={this.checkOpenCards}
                        isOpen={showCards?true:card.isOpen}
                        changeOpenState={changeOpenState}
                        flipCard={this.flipCard}
                    />
                </div>
                )
            }
            </div>
        )
    }

}

export default CardsBoard;