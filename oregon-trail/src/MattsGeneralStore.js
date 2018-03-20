import React from 'react'

class MattsGeneralStore extends React.Component{
  state = {
    items: ['ammunition', 'ox', 'food']
  }

  render(){
    return(
      <h1>
        Welcome to Matts General Store
      </h1>
    )
  }
}

export default MattsGeneralStore;
