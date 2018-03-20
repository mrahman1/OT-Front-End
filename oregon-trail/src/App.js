import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MattsGeneralStore from './MattsGeneralStore'
import NewPlayer from './NewPlayer'
import api from './services/api';

class App extends Component {
  state = {
    player: "",
    gameStatus: null,
    gameId: null,
  }

  handleStartGame = (event) => {
    api.game.postGame().then(
      json => {
        this.setState({
        gameStatus: "started",
        gameId: json.id
      })
  })
}

setPlayer = (name, gameId) => {
  api.player.postPlayer(name, gameId).then(
    json => {
      this.setState({
      player: name,
      gameStatus: "player selected"
    })
})
}

  render() {
    console.log(this.state)
    return (
      <div>
        Welcome to Oregon Trail
        <button onClick={this.handleStartGame}> Click to Start </button>
        {this.state.gameStatus === "started" ? <NewPlayer setPlayer={this.setPlayer} gameId={this.state.gameId}/> : null}
      </div>
    );
  }
}

export default App;
