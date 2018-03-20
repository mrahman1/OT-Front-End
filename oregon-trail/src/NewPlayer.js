import React from 'react'

class NewPlayer extends React.Component {
  state = {
    name: "",
    gameId: this.props.gameId
  }

  handleInput = (event) => {
    this.setState({name: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.name, this.state.gameId)
    this.props.setPlayer(this.state.gameId, this.state.name, )
  }

  render(){
    console.log(this.state)
    return(
      <form onSubmit={this.handleSubmit}>
      <input
        placeholder = "Name"
        value = {this.state.name}
        onChange = {this.handleInput}
      >
      </input>
      </form>
    )
  }
}

export default NewPlayer;
