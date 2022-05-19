import React, {Component} from 'react';
import './App.css';
import Board from './components/board';
import Modal from './components/modal';

class App extends Component {
  state = {
    modal: null
  }

  showModal = (modalMessage) => {
    this.setState({
      modal: modalMessage
    })
  }

  render() {
    return (
      <div className='app'>
        <Board modal={this.showModal}/>
        {this.state.modal?<Modal/>:""}
      </div>
    )
  }
}

export default App;
