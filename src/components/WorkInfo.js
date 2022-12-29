import React from "react";

class WorkInfo extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const {labelName, identifier, changeHandler} = this.props
    return(
      <div className="work-info">
        <label>{labelName}</label>: <input type='text' id={identifier} onChange={(e) => changeHandler(e.target)}/>
      </div>
    )
  }

}

export default WorkInfo