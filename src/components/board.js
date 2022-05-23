import React, {Component} from "react";
import './board.css';
import CardsBoard from "./cards-board";
import items from "../card_list/card-list";
import ControlBar from "./control-bar";
import Modal from './modal';



class Board extends Component {
    
    maxLevel = 3;
    level= 1;
    maxTime = 3;
    clearChildState = null; //Here will be assigned clearChildState function
    state = {
        cards: items,
        showCards: false,
        run: false,
        pause: false,
        modal: {
            active: false,
            text: '',
            buttonText: '',
            toggle: () => {}
        }
    }

    assignClearChildState = (childClearStateFunc) => {
        this.clearChildState = childClearStateFunc;
    }


    levelUp = () => {
        this.level += 1;
        this.maxTime -= 1;
    }

    stopGame = () => {
        if (this.level === this.maxLevel) {
            this.level = 1;
            this.maxTime = 3;
        }
        let cardsReset = this.state.cards.map(card => {
            card.isOpen = false;
            return card;
        });
        this.setState({
            cards: this.reorderCards(cardsReset),
            showCards:false, 
            run: false, 
            pause: false,
            modal: {
                active: false,
                text: '',
                buttonText:'',
                toggle: () => {}
            }
        });
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
        if (this.level === this.maxLevel) {
            this.setState({
                pause: true,
                modal: {
                    active: true,
                    text: "Congratulation! Missión completed",
                    buttonText: 'Close',
                    toggle: () => {
                        this.stopGame();
                        
                    }
                }
            })
            return
        }
        this.setState({
            pause: true,
            modal: {
                active: true,
                text: "Level " + this.level + " completed",
                buttonText: 'Next',
                toggle: () => {
                    this.stopGame();
                    //Next level
                    this.levelUp();
                    
                }
            }
        })
    }

    timeOver = () => {
        this.setState((state) => { 
            return {
                modal: {
                    active: true,
                    text: "Time is over :(",
                    buttonText: 'Close',
                    toggle: () => {
                        this.stopGame();
                    }
                }
            }
        })
    }

    render() {

        return (
            <div className="board">
                <ControlBar
                    start={this.startStop}
                    run={this.state.run}
                    maxTime={this.maxTime}
                    timeOver={this.timeOver}
                    pause={this.state.pause}
                    level={this.level}
                />
                <CardsBoard 
                    cards={this.state.cards} 
                    cardsQuantity = {this.state.cards.length}
                    levelUp={this.levelUp}
                    changeOpenState={this.changeOpenState}
                    showCards={this.state.showCards}
                    run={this.state.run}
                    passClearStateFunc={this.assignClearChildState}
                    win={this.win}
                />
                <Modal active={this.state.modal.active} toggle={this.state.modal.toggle} buttonText={this.state.modal.buttonText}>
                    <h1 style={{textAlign:'center'}}>{this.state.modal.text}</h1>
                </Modal>
            </div>
        )
    }

    componentDidMount() {
        
    }
}



export default Board;