import React from 'react'

class SelectProfile extends React.Component{
  state = {
    value: ""
  }

  keyPress = (event) => {
      event.preventDefault()
      console.log(event.nativeEvent.keyCode)
      this.setState({value: event.nativeEvent.keyCode})
  }

  handleChange=(event)=>{
    this.setState({value: event.target.value})
  }
  render(){
    return (
      <div>
        <p>
          Many kinds of people made the trip to Oregon.

          You may:
          1. Be a banker from Boston
          2. Be a carpenter from Ohio
          3. Be a farmer from Illinois
          4. Find out the differences between these choices

          What is your choice? <input value={this.state.value} onChange={this.handleChange}></input>

        </p>

      </div>
    )
}

}

export default SelectProfile;
