import React, {Component} from 'react';
import './App.css';
import Board from './components/board';

class App extends Component {

  render() {
    return (
      <div className='app'>
        <div>
          <a className='back-portfolio' href='https://www.douglasvg.com/#portfolio'>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              width="300px" height="300px" viewBox="0 0 300 300" style={{enableBackground:"new 0 0 300 300", width:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center"}} xmlSpace="preserve">
              <rect x="126.32" y="102.046" transform="matrix(0.7069 -0.7073 0.7073 0.7069 -103.0155 167.2694)" width="48" height="211.776"/>
              <rect x="44.544" y="68.479" transform="matrix(0.7069 -0.7073 0.7073 0.7069 -21.4659 133.1562)" width="210.78" height="48"/>
            </svg>
          </a>
        </div>
        <Board/>
      </div>
    )
  }
}

export default App;
