import React, {Component} from "react";
import './board.css';
import CardsBoard from "./cards-board";
import items from "../card_list/card-list";
import ControlBar from "./control-bar";




class Board extends Component {
    
    levels = [3000,2000,1000,500,0];
    state = {
        cards: items,
        level: 0
    }

    levelUp = (level) => {
        this.setState({level: level + 1})
        return this.state.level;
    }

    changeOpenState = (isOpen, id) => {
        const updatedCards = this.state.cards.map(card => {
            console.log(id, isOpen)
            if (card.id === id) {
                card.isOpen = isOpen;
            }
            return card;
        })
        this.setState({cards: updatedCards})
        console.log(this.state.cards)
    }

    render() {

        return (
            <div className="board">
                <ControlBar level={3000}/>
                <CardsBoard 
                    cards={this.state.cards} 
                    level={this.levels[this.state.level]}
                    levelUp={this.levelUp}
                    changeOpenState={this.changeOpenState}
                />
            </div>
        )
    }

    componentDidMount() {
        
    }
}



export default Board;