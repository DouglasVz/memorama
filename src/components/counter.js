import React, {Component} from "react";

class CountDown extends Component {
    

    state = {
        time: this.props.maxTime * 60
        
    }

    minutes =  Math.floor(this.state.time / 60)
    seconds = this.state.time % 60

    countDown = () => {
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time - 1
            }, () => {
                this.minutes =  Math.floor(this.state.time / 60)
                this.seconds = this.state.time % 60
            })
            
        },1000)  
    }

    
    render() {
        return (
            <div>
                <h1>{this.minutes}:{this.seconds}</h1>
            </div>
        )
    }

    componentDidMount() {
        this.countDown();
        
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        
        if ( this.state.time <= 50) {
            console.log('la pu')
            clearInterval(this.timer);
        }
    }

    componentWillUnmount() {
        console.log('la chic')
        clearInterval(this.timer);
    }
 
}

export default CountDown;