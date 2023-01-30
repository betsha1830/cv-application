import React from "react";

class WorkInfo extends React.Component {
  constructor(props){
    super(props)

    this.addWork = this.addWork.bind(this)
    
    this.state = {
      temp: {}
    }
    this.temp_obj = {}
  }

  // Temporarly stores the user input into an object for later to be copied to the main work array object

  inputChange = (e) => {
    if(document.getElementById('add_work_button').innerText === 'Done'){
      let new_obj = {}
      Object.keys(this.props.workLabel).forEach((label) => {
        new_obj = Object.assign(new_obj, {[label]: document.getElementById(label).value})
        console.log(document.getElementById(label).value, new_obj)
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
    document.getElementById('end_work_date').disabled = false
    document.getElementById('still_enrolled_work').checked = false
  }

  // Disables the end work date if candidate is still enrolled in their currnet job

  fieldChecked = () => {    
    if(document.getElementById('still_enrolled_work').checked){
      document.getElementById('end_work_date').disabled = true
      return true
    }
    document.getElementById('end_work_date').disabled = false
    return false
  }

  // Concatenates their work experience to the work array object

  addWork = () => {
    if(document.getElementById('add_work_button').innerText === 'Done'){
      if(this.fieldChecked()){
        let obj = {}
        if(Object.entries(this.state.temp).length === 0) {
          // console.log(this.props.workArr)
          Object.keys(this.props.workLabel).forEach((label) => {
            obj = Object.assign(obj, {[label]: document.getElementById(label).value})
            console.log(document.getElementById(label).value, obj)
          })
          obj = Object.assign(obj, {end_work_date: 'Present'})
          this.props.clickHandler(obj)
          this.clearFields()
        }
        else {
          const obj = Object.assign(this.state.temp, {end_work_date: 'Present'})
          this.props.clickHandler(obj)
          console.log(obj, 'if')
          this.clearFields()
        }
      }
  
      else {
        // console.log(this.state.temp)
        // const obj = Object.assign(this.state.temp, this.props.workArr)
  
        // console.log(obj, 'else')
        
        // document.getElementById('add_work_button').innerText = 'Add'
        this.props.clickHandler(this.state.temp)
        this.clearFields()
  
        this.setState({
          temp: {}
        })
      }
      this.setState({
        temp: {}
      })
    }

    else {

      if(this.fieldChecked()){
        // this.populateObject()
        const temp_obj = Object.assign(this.state.temp, {end_work_date: 'Present'})
        this.props.clickHandler(temp_obj)
        this.clearFields()
        this.setState({
          temp: {}
        })
      }
      
      else {
        this.props.clickHandler(this.state.temp)

        // document.getElementById('add_work_button').innerText = 'Add'
        this.clearFields()
        this.setState({
          temp: {}
        })
        // console.log(this.state.temp, 'else')
      }
      
    }
  }

  render(){
    const {workLabel} = this.props

    return(
      <div className="work_info">
        {
          Object.keys(workLabel).map((item) => {
            return(
              <div>
                <div className="label"><label>{workLabel[item]}</label>: </div>
                <input required value={this.state.text} onChange={this.inputChange} type={workLabel[item].includes('Beginning') || workLabel[item].includes('End') ? 'date' : 'text'} id={item} />
              </div>
            )})
        }
        <div className="still_enrolled"><input onChange={this.fieldChecked} id='still_enrolled_work' type={'checkbox'}></input> <div className="checkbox_label"><span>Still enrolled in this position</span></div></div>
        <div><button onClick={this.addWork} id='add_work_button'>Add</button></div>
      </div>
    )
  }
}

export default WorkInfo