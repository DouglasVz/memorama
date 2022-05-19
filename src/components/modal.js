import React, {Component} from "react";
import './modal.css';

class Modal extends Component {
    
    render() {
        return (
            <div className="modal">
                <h1>You win!</h1>
                <button className="action-btn">NEXT</button>
            </div>
        )
    }
}

export default Modal;