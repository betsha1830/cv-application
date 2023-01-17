import React from "react";

class WorkInfo extends React.Component {
  constructor(props){
    super(props)

    this.addWork = this.addWork.bind(this)
    
    this.state = {
      temp: {},
      work: []
    }
  }

  // Temporarly stores the user input into an object for later to be copied to the main work array object

  inputChange = (e) => {
    if(document.getElementById('add_work_button').innerText === 'Done'){
      let new_obj = {}
      Object.keys(this.props.workLabel).map((label) => {
        new_obj = Object.assign(new_obj, {[label]: document.getElementById(label).value})
        // console.log(document.getElementById(label).value, new_obj)
      })
      const user_input = {
        [e.target.id]: e.target.value
      }
      new_obj = Object.assign(new_obj, user_input)
      this.setState({
        temp: new_obj
      })
      // console.log(new_obj)
    }
    else {
      const user_input = {
        [e.target.id]: e.target.value
      }
      const new_obj = Object.assign(this.state.temp, user_input)
      this.setState({
        temp: new_obj
      })
    }
    
    // console.log(this.state.temp)
  }

  // Clears the input field to insert their next work experience

  clearFields = () => {
    Object.keys(this.props.workLabel).forEach((item) => {
      document.getElementById(item).value = ''
    })
  }

  // Dsiables the end work date if candidate is still enrolled in their currnet job

  fieldDisabled = () => {    
    if(document.getElementById('still_enrolled_work').checked){
      document.getElementById('end_work_date').disabled = true
      return true
    }
    document.getElementById('end_work_date').disabled = false
    return false
  }

  // Concatenates their work experience to the work array object

  addWork = () => {
    if(this.fieldDisabled()){
      const obj = Object.assign(this.state.temp, {end_work_date: 'Present'})
      // this.setState({
      //   work: this.state.work.concat(obj),
      //   temp: {}
      // })
      // console.log(obj)
      this.props.clickHandler(obj)
      this.clearFields()
    }
    else {
      // this.setState({
      //   work: this.state.work.concat(this.state.temp),
      //   temp: {}
      // })
      this.props.clickHandler(this.state.temp)
      this.setState({
        temp: {},
      })
      this.clearFields()
      // console.log(this.state.work, 'else')
    }
  }

  render(){
    const {workLabel} = this.props

    return(
      <div className="work-info">
        {
          Object.keys(workLabel).map((item) => {
            return(
              <div>
                <label>{workLabel[item]}</label>: <input required value={this.state.text} onChange={this.inputChange} type={workLabel[item].includes('Beginning') || workLabel[item].includes('End') ? 'date' : 'text'} id={item} />
              </div>
            )})
        }
        <input onChange={this.fieldDisabled} id='still_enrolled_work' type={'checkbox'}></input> <span>Still enrolled in this position</span>
        <button onClick={this.addWork} id='add_work_button'>Add</button>
        {
          this.state.work.map((item) => {
            return(
              <div> 
                {Object.keys(item).map((key) => {
                  return(
                    <div>
                      {workLabel[key]}: {item[key]}  
                    </div>
                  )
                })}
              </div>
          )})
        }
      </div>
    )
  }
}

export default WorkInfo