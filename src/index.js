import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  
  render() {
    return (
      <button className={this.props.clicked ? "clicked" : "square"} 
              style={{color: this.props.color}} 
              onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: ['2',null,'1',null,
                null,null,'3',null,
                '3',null,null,null,
                null,'1',null,'1'],
      clicked: Array(16).fill(false)
    }
  }
  submit() {
    const answer = [false,false,false,false,
    true,true,false,false,
    false,true,false,true,
    false,false,false,false];
    var equal = true;
    var i;
    for( i = 0; i < answer.length; i++ ) {
       if ( answer[i] !== this.state.clicked[i]) {
         equal = false;
       }
    }
    if (equal){
      alert("Correct!")
    }
    else {
        alert("Incorrect!");
    }
  }
   handleClick(i) {
    const clicked = this.state.clicked.slice();
    
    clicked[i] = !clicked[i];
    this.setState({clicked:clicked});
  }
  renderSquare(i) {
    var color = "";
    switch (this.state.squares[i]) {
      case '1':
        color = "#536ad1";
        break;
      case '2':
        color = "#358035";
        break;
      case '3':
        color = "#c84848";
        break;
      default:
        color = "#000000";
    }
    return <Square value={this.state.squares[i]} color={color} clicked={this.state.clicked[i]} onClick={() => this.handleClick(i)} />;
  }
 
  render() {
    const status = 'TO PROCEED, CLICK \n ALL THE PICTURES OF MINES';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
        <div className = "status"></div>
        <button className = "submit" onClick={() => this.submit()}>SUBMIT</button>
        <br></br>
        Inspired by <a href="https://xkcd.com/2496/">this xkcd comic</a>. Code taken from <a href="https://reactjs.org/tutorial/tutorial.html">React Tutorial</a>.
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);