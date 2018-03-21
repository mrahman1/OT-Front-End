import React from 'react'
import SelectProfile from './SelectProfile'

class NewPlayer extends React.Component {
  state = {
    name: "",
    gameId: this.props.gameId,
    profile: 1
  }

  handleInput = (event) => {
    this.setState({name: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.name, this.state.gameId)
    this.props.setPlayer(this.state.gameId, this.state.name)
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
          placeholder = "Name"
          value = {this.state.name}
          onChange = {this.handleInput}
        >
        </input>
        </form>
        <SelectProfile />
      </div>
    )
  }
}

export default NewPlayer;
