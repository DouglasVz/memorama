import React, {Component} from "react";
import './board.css';
import CardsBoard from "./cards-board";
import items from "../card_list/card-list";
import ControlBar from "./control-bar";




class Board extends Component {
    
    levels = [3000,2000,1000,500];
    maxTime = 3;
    clearChildState = null; //Here
    state = {
        cards: items,
        level: 0,
        showCards: false,
        run: false,
        pause: false
    }

    assignClearChildState = (childClearStateFunc) => {
        this.clearChildState = childClearStateFunc;
    }


    levelUp = (level) => {
        this.setState({level: level + 1})
        return this.state.level;
    }

    stopGame = () => {
        let cardsReset = this.state.cards.map(card => {
            card.isOpen = false;
            return card;
        });
        this.setState({cards: this.reorderCards(cardsReset) ,showCards:false, run: false, pause: false});
        //Clear child state
        this.clearChildState();
        
    }

    reorderCards(cards) {
        return cards.sort((a,b) => {return 0.5 - Math.random()});
    }

    startStop = () => {
        //START
        if(!this.state.run) {
            this.setState({showCards:true}, () => {
                setTimeout(() => {
                    this.setState({showCards:false, run: true});
                }, 1000) 
            });
            return
        }
        //STOP
        this.stopGame();
    }

    timeOver = () => {
        alert('The time is over')
        //STOP
        this.stopGame();
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

    win = () => {
        this.props.modal("You win!");
        this.setState({
            pause: true
        })
    }

    render() {

        return (
            <div className="board">
                <ControlBar level={3000}
                    start={this.startStop}
                    run={this.state.run}
                    maxTime={this.maxTime}
                    timeOver={this.timeOver}
                    pause={this.state.pause}
                />
                <CardsBoard 
                    cards={this.state.cards} 
                    level={this.levels[this.state.level]}
                    cardsQuantity = {this.state.cards.length}
                    levelUp={this.levelUp}
                    changeOpenState={this.changeOpenState}
                    showCards={this.state.showCards}
                    run={this.state.run}
                    passClearStateFunc={this.assignClearChildState}
                    win={this.win}
                />
            </div>
        )
    }

    componentDidMount() {
        
    }
}



export default Board;