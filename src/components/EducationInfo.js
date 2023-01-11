import React, { Component } from 'react'

class EducationInfo extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    const {labelName, identifier, changeHandler} = this.props
    return (
      <div className='Input'>
        <label>{labelName}</label>: <input type={labelName.includes('Beginning') || labelName.includes('End')  ? 'date' : 'text'} id={identifier} onChange={(e) => changeHandler(e.target)}/>
      </div>
    )
  }
}

export default EducationInfo;