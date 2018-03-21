import React from 'react'

class StartMenu extends React.Component{
  state = {
    choice: ""
  }

  choices = ['1. Travel the trail', '2. Learn about the trail', '3. End']

  render(){
    return (
      <div id="start-menu">
        <img id="banner" src="OregonTrailBanner.jpg"/>
        <p>
          You may:
            <ol>
              <li> Travel the trail </li>
              <li> Learn about the trail </li>
              <li> End </li>
            </ol>
            What is your choice? _
        </p>
      </div>
    )
}

}

export default StartMenu;
