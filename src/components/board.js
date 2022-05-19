import React, {Component} from "react";
import './board.css';
import CardsBoard from "./cards-board";
import items from "../card_list/card-list";
import ControlBar from "./control-bar";




class Board extends Component {
    
    levels = [3000,2000,1000,500,0];
    maxTime = 1;
    state = {
        cards: items,
        level: 0,
        showCards: false,
        run: false
    }

    levelUp = (level) => {
        this.setState({level: level + 1})
        return this.state.level;
    }

    startStop = () => {
        //START
        if(!this.state.run) {
            this.setState({showCards:true}, () => {
                setTimeout(() => {
                    this.setState({showCards:false, run: true});
                }, 3000) 
            });
            return
        }
        //STOP
        let cardsReset = this.state.cards.map(card => {
            card.isOpen = false;
            return card;
        });
        this.setState({cards: cardsReset ,showCards:false, run: false});
    }

    timeOver = () => {
        alert('The time is over')
        //STOP
        let cardsReset = this.state.cards.map(card => {
            card.isOpen = false;
            return card;
        });
        this.setState({cards: cardsReset ,showCards:false, run: false});
    }

    changeOpenState = (isOpen, id) => {
        const updatedCards = this.state.cards.map(card => {
           
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
                <ControlBar level={3000}
                    start={this.startStop}
                    run={this.state.run}
                    maxTime={this.maxTime}
                    timeOver={this.timeOver}
                />
                <CardsBoard 
                    cards={this.state.cards} 
                    level={this.levels[this.state.level]}
                    levelUp={this.levelUp}
                    changeOpenState={this.changeOpenState}
                    showCards={this.state.showCards}
                    run={this.state.run}
                />
            </div>
        )
    }

    componentDidMount() {
        
    }
}



export default Board;