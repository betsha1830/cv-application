import React, { Component } from 'react'

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    const {labelName, identifier, changeHandler} = this.props
    return (
      <div className='Input'>
        <label>{labelName}</label>: <input type='text' id={identifier} onChange={(e) => changeHandler(e.target)}/>
      </div>
    )
  }
}

export default Input