import React, {Component} from "react";
import './control-bar.css';
import CountDown from "./counter";

class ControlBar extends Component {

    render() {
        const {start, run, maxTime} = this.props;
        return (
            <div className="control-bar-container">
                <div className="control-bar">
                    <h2>Level 1</h2>
                    <CountDown maxTime={maxTime}/>
                    <button className="start-restart-btn" onClick={start}>{run?'Stop':'Start'}</button>
                </div>
            </div>
        );
    }
}

export default ControlBar;