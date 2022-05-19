import React, {Component} from "react";

class CountDown extends Component {

    state = {
        time: this.props.maxTime * 60
        
    }

    countDown = () => {
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time - 1
            })
            
        },1000)  
    }

    
    render() {
        return (
            <div>
                {<h1>{Math.floor(this.state.time / 60)}:{this.state.time % 60}</h1>}
            </div>
        )

    }

    componentDidMount() {
        this.countDown();
        
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        if ( this.state.time === 0) {
            clearInterval(this.timer);
            this.props.timeOver();
            return;
        }
        if (this.props.pause) {
            clearInterval(this.timer);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
 
}

export default CountDown;