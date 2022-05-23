import React, {Component} from "react";
import Portal from '../portal';
import './modal.css';

class Modal extends Component {

    render() {
        const {children, toggle, active, buttonText} = this.props;
        return (
            <Portal>
                {active && (
                    <>
                        <div className="overlay"></div>
                        <div className="modal">
                            <div>{children}</div>
                            <button className="action-btn" onClick={toggle}>{buttonText}</button>
                        </div>
                    </>
                    ) 
                }
            </Portal>
        )
    }
}

export default Modal;