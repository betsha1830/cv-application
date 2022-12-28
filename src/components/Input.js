import React, { Component } from 'react'

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    const {labelName} = this.props
    return (
      <div className='Input'>
        <label>{labelName}</label>: <input type='text'/>
      </div>
    )
  }
}

export default Input