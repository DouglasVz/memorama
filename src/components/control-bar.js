import React, {Component} from "react";
import './control-bar.css';
import CountDown from "./counter";

class ControlBar extends Component {

    render() {
        const {start, run, maxTime, level,timeOver, pause} = this.props;
        return (
            <div className="control-bar-container">
                <div className="control-bar">
                    <h2>Level: {level}</h2>
                    {run?<CountDown maxTime={maxTime} timeOver={timeOver} pause={pause}/>:<h1>0:0</h1>}
                    <button className="start-restart-btn" onClick={start}>{run?'Stop':'Start'}</button>
                </div>
            </div>
        );
    }
}

export default ControlBar;