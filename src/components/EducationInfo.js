import React, { Component } from 'react'

class EducationInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      temp: {

      },
      education: []
    }
  }

  inputChange = (e) => {
    const user_input = {
      [e.target.id]: e.target.value
    }
    const new_obj = Object.assign(this.state.temp, user_input)
    this.setState({
      temp: new_obj,
    })
    console.log(this.state.temp)
  }

  render() {
    const {labelName} = this.props
    return (
      <div className='eduction-info'>
        {Object.keys(labelName).map((item) => {
          return (
          <div>
            <label>{labelName[item]}: </label> <input onChange={this.inputChange} type={(labelName[item].include('Beginning')) || (labelName[item].include('End') ? 'date' : 'text')}></input>
          </div>
          )})}
      </div>
    )
  }
}

export default EducationInfo;