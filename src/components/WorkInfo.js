import React from "react";

class WorkInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    const {labelName, identifier, changeHandler} = this.props

    return(
      <div className="work-info">
        <label>{labelName}</label>: <input type={labelName.includes('Beginning') || labelName.includes('End') ? 'date' : 'text'} id={identifier} onChange={(e) => changeHandler(e.target)}/>
      </div>
    )
  }

}

export default WorkInfo