import React, { Component } from 'react';

const EMPTY = 0;
const SHIP = 1;
const SHIP_HIT = "HIT";
const EMPTY_HIT = "MISS";

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [],
      bgColor: 'lightblue',
    }
    this.setUpBoard()
  }

  componentWillMount(){
    for(let i = 0; i < 5; i++){
      this.placeShip()
    }
  }

  setUpBoard() {
    let board = []

    for(let row = 0; row < 10; row++) {
      board.push([])
      for(let col = 0; col < 10; col++) {
        board[row][col] = EMPTY
      }
    }

    console.log(board);

    this.state.board = board
  }

  placeShip() {

    let i = 0;
    // get the array out of the state
    let newBoard = this.state.board

    while(i < 1){
      let row = Math.floor(Math.random() * 10)
      let col = Math.floor(Math.random() * 10)
      // update it
      if(!newBoard[row][col] || newBoard[row][col].length === 0) {
        newBoard[row][col] = SHIP
        i++
      }
    }
    // put it back with set state
    this.setState({
      board: newBoard
    })
  }

  clickHandler(row, col, e) {
    const board = this.state.board

    if (board[col][row] === SHIP) {
      board[col][row] = SHIP_HIT
      e.target.style.backgroundColor = 'green'
    } else if (board[col][row] === EMPTY) {
      board[col][row] = EMPTY_HIT
      e.target.style.backgroundColor = 'red'
    }
    this.setState({board})
  }

  renderRow(row) {
    const { board } = this.state

    const set = [];
    for (let col = 0; col < 10; col++) {
      let theXY = col + "_" + row
      set.push(
        <td id={theXY}
            key={theXY}
            onClick={this.clickHandler.bind(this,col, row)}
            style={{backgroundColor:this.state.bgColor}}

        >
          {board[row][col] !== 0 ? board[row][col] : ''}
        </td>
      );
    }
    return set;
  }

  renderRows() {
      const rows = [];
      for (let i = 0; i < 10; i++) {
        rows.push(<tr key={i}>{this.renderRow(i)}</tr>);
      }
      return rows;
  }

  render() {
    return (
      <table>
        <tbody>
          { this.renderRows() }
        </tbody>
      </table>
    )
  }
}

export default Board;
